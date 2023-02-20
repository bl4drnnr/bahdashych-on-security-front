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
  width?: string | undefined;
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

  const generateLists = (items: any, type: string) => {
    const CreatedList = ({ items, type }: { items: any, type: string }): JSX.Element => {
      if (type === 'list-bullet') {
        return (
          <ul className={'blog-post-ul'}>
            {items.map((item: any) => {
              if (typeof item === 'string') {
                return (
                  <li
                    key={item}
                    className={`blog-post-li ${locale === 'en' ? 'en' : 'non-en'}`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                );
              } else {
                return (
                  <span
                    key={item}
                    className={`blog-post-li ${locale === 'en' ? 'en' : 'non-en'}`}
                  >
                    {generateLists(item.items, item.type)}
                  </span>
                );
              }
            })}
          </ul>
        );
      } else {
        return (
          <ol className={'blog-post-ol'}>
            {items.map((item: any) => {
              if (typeof item === 'string') {
                return (
                  <li
                    key={item}
                    className={`blog-post-li ${locale === 'en' ? 'en' : 'non-en'}`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                );
              } else {
                return (
                  <span
                    key={item}
                    className={`blog-post-li ${locale === 'en' ? 'en' : 'non-en'}`}
                  >
                    {generateLists(item.items, item.type)}
                  </span>
                );
              }
            })}
          </ol>
        );
      }
    };

    return <CreatedList items={items} type={type} />;
  };

  const scrollTo = (ref: any) => {
    if (ref && ref.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getRefByName = (refName: string | undefined): any => {
    let matchingRef = null;
    refNames.forEach((item, index) => {
      if (item === refName && !refName.includes('.')) {
        matchingRef = listRefs[index];
      } else {
        const splitRefName = refName?.split('.');
        if (splitRefName && splitRefName[splitRefName.length - 1] === item) {
          matchingRef = listRefs[index];
        }
      }
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
        (item.type === 'title' || item.type === 'subtitle' || item.type === 'subsubtitle')
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
                  ) : (item.type === 'title' || item.type === 'subtitle' || item.type === 'subsubtitle') ? (
                    <PostParagraph
                      className={item.type}
                      ref={getRefByName(item.content)}
                    >{item.content}</PostParagraph>
                  ) : ((isArticleCode(item)) ? (
                    <CodeHighlighter language={item.lang} code={item.content} />
                  ) : ((item.type === 'list-bullet' || item.type === 'list-numeric') ? (
                    generateLists(item.items, item.type)
                  ) : (
                    ((item.type === 'picture') ? (
                      <ImageContainer className={`${item.width}`}>
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
