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
  TableOfContentsOl,
  TableOFContentsLi,
  TableOfContentsTitle
} from '@styles/post.style';

interface NextjsNginxDeploymentProps {
  locale: string;
}

const NextjsNginxDeployment = ({ locale }: NextjsNginxDeploymentProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  const [listRefs, setListRefs] = React.useState<RefObject<unknown>[]>([]);
  const [refNames, setRefNames] = React.useState<Array<string>>([]);

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


  React.useEffect(() => {
    let quantityOfTitles = 0;
    const allRefs: Array<string> = [];

    Object.entries(t('articles:nextjsNginxDeployment.content', { returnObjects: true }))
      .forEach(([key, value]) => {
        if (typeof value !== 'string' && (value['type'] === 'title' || value['type'] === 'subtitle')) {
          quantityOfTitles += 1;
          allRefs.push(value['content']);
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
        <ArticleBodyWrapper>
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

          <TableOfContentsContainer>
            <TableOfContentsTitle>
              {t('common:tocTitle')}
            </TableOfContentsTitle>
            <TableOfContentsOl>
              {
                Object.entries(t('articles:nextjsNginxDeployment.toc', { returnObjects: true }))
                  .map(([value, key], index) => (
                  <div key={value}>
                    {typeof key === 'string' ? (
                      <TableOFContentsLi
                        onClick={() => scrollTo(getRefByName(t(`articles:nextjsNginxDeployment.toc.${value}`)))}
                      >
                        {t(`articles:nextjsNginxDeployment.toc.${value}`)}
                      </TableOFContentsLi>
                    ) : (
                      <TableOFContentsLi>
                        <span onClick={() => scrollTo(getRefByName(value))}>{value}</span>
                        <TableOfContentsOl>
                          {Object.entries(key).map(([nValue, nKey]) => (
                            <TableOFContentsLi
                              key={nValue}
                              onClick={() => scrollTo(getRefByName(t(`articles:nextjsNginxDeployment.toc.${value}.${nValue}`)))}
                            >
                              {t(`articles:nextjsNginxDeployment.toc.${value}.${nValue}`)}
                            </TableOFContentsLi>
                          ))}
                        </TableOfContentsOl>
                      </TableOFContentsLi>
                    )}
                  </div>
                ))
              }
            </TableOfContentsOl>
          </TableOfContentsContainer>

          {
            Object.entries(t('articles:nextjsNginxDeployment.content', { returnObjects: true }))
              .map(([value, key], index) => (
              <div key={value}>
                {typeof key === 'string' ? (
                  <PostParagraph
                    dangerouslySetInnerHTML={{ __html: t(`articles:nextjsNginxDeployment.content.p${index}`) }}
                  />
                ) : (key['type'] === 'title' || key['type'] === 'subtitle') ? (
                  <PostParagraph
                    className={key['type']}
                    ref={getRefByName(key['content'])}
                  >{key['content']}</PostParagraph>
                ) : ((key['type'] === 'code') ? (
                    <CodeHighlighter language={key['lang']} code={key['content']} />
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
