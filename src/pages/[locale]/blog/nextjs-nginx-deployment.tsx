import React, { RefObject } from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import CodeHighlighter from '@components/CodeHighlighter/CodeHighlighter.component';
import PostFooter from '@components/PostFooter/PostFooter.component';
import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import {
  ArticleBodyWrapper,
  ArticleTitle,
  PostParagraph,
  TableOfContentsContainer,
  TableOfContentsTitle
} from '@styles/post.style';

interface NextjsNginxDeploymentProps {
  locale: string;
}

interface IArticleTitle {
  type: string;
  content: string;
}

interface IArticleCode {
  type: string;
  lang?: string;
  content: string;
}

interface ArticleContentObject {
  [key: string]: string | IArticleCode | IArticleTitle;
}

const NextjsNginxDeployment = ({ locale }: NextjsNginxDeploymentProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  const [listRefs, setListRefs] = React.useState<RefObject<unknown>[]>([]);
  const [refNames, setRefNames] = React.useState<Array<string>>([]);

  const generateTableOfContents = (toc: any, parentKeyName?: string) => {
    const CreateTableOfContents = ({ toc, parentKeyName }: { toc: any, parentKeyName?: string }): JSX.Element => {
      return (
        <ol className={'blogPostOl'}>
          {Object.entries(toc).map(([key, value]: any) => {
            const keyName = parentKeyName ? `${parentKeyName}.${key}` : key;
            if (typeof value === 'string') {
              return (
                <li
                  className={'blogPostLi'}
                  key={key}
                  onClick={() => scrollTo(getRefByName(t(`articles:nextjsNginxDeployment.toc.${keyName}`)))}
                >
                  {t(`articles:nextjsNginxDeployment.toc.${keyName}`)}
                </li>
              );
            } else {
              return (
                <li
                  className={'blogPostLi'}
                  key={key}
                >
                  <span onClick={() => scrollTo(getRefByName(keyName))}>{key}</span>
                  {generateTableOfContents(value, keyName)}
                </li>
              );
            }
          })}
        </ol>
      );
    };

    return <CreateTableOfContents toc={toc} parentKeyName={parentKeyName} />;
  };


  const scrollTo = (ref: any) => {
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getRefByName = (refName: string): any => {
    let matchingRef = null;
    refNames.forEach((item, index) => {
      if (item === refName) matchingRef = listRefs[index];
    });
    return matchingRef;
  };

  const isArticleCode = (object: any): object is IArticleCode => {
    return 'lang' in object;
  };

  React.useEffect(() => {
    let quantityOfTitles = 0;
    const allRefs: Array<string> = [];

    const contentObj: ArticleContentObject = t('articles:nextjsNginxDeployment.content', { returnObjects: true });

    Object.entries(contentObj).forEach(([key, value]) => {
        if (
          typeof value !== 'string' &&
          (value.type === 'title' || value.type === 'subtitle')
        ) {
          quantityOfTitles += 1;
          allRefs.push(value.content);
        }
      });

    setListRefs(Array(quantityOfTitles).fill(null).map(() => React.createRef()));

    setRefNames(allRefs);
  }, [t]);

  return (
    <>
      <Head>
        <title>{t('pages:home.name')} | {t('articles:nextjsNginxDeployment.title')}</title>
        <meta name={'keywords'} content={t('articles:nextjsNginxDeployment.tags') as string} />
        <meta name={'description'} content={t('articles:nextjsNginxDeployment.description') as string} />
        <meta charSet={'utf-8'} />
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <ArticleBodyWrapper className={locale === 'en' ? 'en' : 'non-en'}>
          <ArticleTitle>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(75)
                  .typeString(t('articles:nextjsNginxDeployment.title'))
                  .start();
              }}
            />
          </ArticleTitle>

          <ArticleTitle className={'intro'}>
            {t('articles:nextjsNginxDeployment.intro')}
          </ArticleTitle>

          <TableOfContentsContainer className={locale === 'en' ? 'en' : 'non-en'}>
            <TableOfContentsTitle>
              {t('common:tocTitle')}
            </TableOfContentsTitle>
            {generateTableOfContents(t('articles:nextjsNginxDeployment.toc', { returnObjects: true }))}
          </TableOfContentsContainer>

          {
            Object.entries(t('articles:nextjsNginxDeployment.content', { returnObjects: true }) as ArticleContentObject)
              .map(([value, key], index) => (
              <div key={value}>
                {typeof key === 'string' ? (
                  <PostParagraph
                    dangerouslySetInnerHTML={{ __html: t(`articles:nextjsNginxDeployment.content.p${index}`) }}
                  />
                ) : (key.type === 'title' || key.type === 'subtitle') ? (
                  <PostParagraph
                    className={key.type}
                    ref={getRefByName(key.content)}
                  >{key.content}</PostParagraph>
                ) : ((isArticleCode(key)) ? (
                    <CodeHighlighter language={key.lang} code={key.content} />
                  ) : (
                    <></>
                  ))}
              </div>
            ))
          }

          <PostFooter message={'Thank you for reading! I hope you found it useful.'} />
        </ArticleBodyWrapper>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles']);
export { getStaticPaths, getStaticProps };

export default NextjsNginxDeployment;
