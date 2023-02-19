import React, { RefObject } from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import CodeHighlighter from '@components/CodeHighlighter/CodeHighlighter.component';
import PostFooter from '@components/PostFooter/PostFooter.component';
import DefaultLayout from '@layouts/Default.layout';
import { makeStaticProps } from '@lib/getStatic';
import {
  ArticleBodyWrapper,
  ArticleTitle, ImageContainer,
  PostParagraph,
  TableOfContentsContainer,
  TableOfContentsTitle
} from '@styles/post.style';

interface PostProps {
  locale: string;
  postName: string;
}

interface IReference {
  name: string;
  link: string;
}

interface ArticleContentObject {
  type?: string | undefined;
  lang?: string | undefined;
  content?: string | undefined;
  resource?: string | undefined;
  items?: Array<any>
}

const BlogPost = ({ locale, postName }: PostProps) => {
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
        <ol className={'table-of-contents-ol'}>
          {Object.entries(toc).map(([key, value]: any) => {
            const keyName = parentKeyName ? `${parentKeyName}.${key}` : key;
            if (typeof value === 'string') {
              return (
                <li
                  className={'table-of-contents-li'}
                  key={key}
                  onClick={() => scrollTo(getRefByName(t(`articles:${postName}.toc.${keyName}`) as string))}
                >
                  {t(`articles:${postName}.toc.${keyName}`)}
                </li>
              );
            } else {
              return (
                <li
                  className={'table-of-contents-li'}
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

  const getRefByName = (refName: string | undefined): any => {
    let matchingRef = null;
    refNames.forEach((item, index) => {
      if (item === refName) matchingRef = listRefs[index];
    });
    return matchingRef;
  };

  const isArticleCode = (object: any) => {
    return 'lang' in object;
  };

  React.useEffect(() => {
    // @ts-ignore
    const availablePosts = process.env.NEXT_PUBLIC_AVAILABLE_POSTS.split(',');
    if (!availablePosts.includes(postName)) handleRedirect('/404').then();

    let quantityOfTitles = 0;
    const allRefs: Array<string> = [];

    const contentObj: ArticleContentObject[] = t(`articles:${postName}.content`, { returnObjects: true });

    contentObj.forEach((item: ArticleContentObject | string) => {
      if (
        typeof item !== 'string' &&
        (item.type === 'title' || item.type === 'subtitle')
      ) {
        quantityOfTitles += 1;
        allRefs.push(item.content as string);
      }
    });

    setListRefs(Array(quantityOfTitles).fill(null).map(() => React.createRef()));

    setRefNames(allRefs);
  }, [t]);

  return (
    <>
      <Head>
        <title>{t('pages:home.name')} | {t(`articles:${postName}.title`)}</title>
        <meta name={'keywords'} content={t(`articles:${postName}.tags`) as string} />
        <meta name={'description'} content={t(`articles:${postName}.description`) as string} />
        <meta charSet={'utf-8'} />
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <ArticleBodyWrapper className={locale === 'en' ? 'en' : 'non-en'}>
          <ArticleTitle>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(75)
                  .typeString(t(`articles:${postName}.title`))
                  .start();
              }}
            />
          </ArticleTitle>

          <ArticleTitle className={'intro'}>
            {t(`articles:${postName}.intro`)}
          </ArticleTitle>

          <TableOfContentsContainer className={locale === 'en' ? 'en' : 'non-en'}>
            <TableOfContentsTitle>
              {t('common:tocTitle')}
            </TableOfContentsTitle>
            {generateTableOfContents(t(`articles:${postName}.toc`, { returnObjects: true }))}
          </TableOfContentsContainer>

          {
            (t(`articles:${postName}.content`, { returnObjects: true }) as ArticleContentObject[])
              .map((item: ArticleContentObject | string, index) => (
                <div key={index}>
                  {typeof item === 'string' ? (
                    <PostParagraph
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ) : (item.type === 'title' || item.type === 'subtitle') ? (
                    <PostParagraph
                      className={item.type}
                      ref={getRefByName(item.content)}
                    >{item.content}</PostParagraph>
                  ) : ((isArticleCode(item)) ? (
                    <CodeHighlighter language={item.lang} code={item.content} />
                  ) : ((item.type === 'list-bullet') ? (
                    <ul className={'blog-post-ul'}>
                      {item.items?.map((listItem: string) => (
                        <li
                          className={`blog-post-li ${locale === 'en' ? 'en' : 'non-en'}`}
                          key={listItem}
                          dangerouslySetInnerHTML={{ __html: listItem }}
                        />
                      ))}
                    </ul>
                    ) : ((item.type === 'list-numeric') ? (
                      <ol className={'blog-post-ol'}>
                        {item.items?.map((listItem: string) => (
                          <li
                            key={listItem}
                            className={`blog-post-li ${locale === 'en' ? 'en' : 'non-en'}`}
                            dangerouslySetInnerHTML={{ __html: listItem }}
                          />
                        ))}
                      </ol>
                  ) : ((item.type === 'picture') ? (
                    <ImageContainer>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/${postName}/${item.resource}`}
                        alt={item.resource as string}
                        className={'image'}
                        fill
                      />
                    </ImageContainer>
                  ) : (<></>))
                    )
                  ))}
                </div>
              ))
          }

          <TableOfContentsContainer className={`${locale === 'en' ? 'en' : 'non-en'} contact-and-references`}>
            {
              Object.entries(t(`articles:${postName}.references`, { returnObjects: true }) as IReference[]).map(([key, value]) => (
                <ul key={key}>
                  <li className={'table-of-contents-ul'}>
                    <a href={value.link}>{value.name}</a>
                  </li>
                </ul>
              ))
            }
          </TableOfContentsContainer>

          <PostFooter
            timestamp={t(`articles:${postName}.timestamp`) as string}
            message={t(`articles:${postName}.footer`) as string}
            locale={locale}
          />
        </ArticleBodyWrapper>
      </DefaultLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const staticProps = await makeStaticProps(['pages', 'components', 'common', 'articles', 'projects']);
  const pageProps = await staticProps(ctx);
  const props = pageProps.props;

  return {
    props: {
      ...props
    }
  };
};

export default BlogPost;
