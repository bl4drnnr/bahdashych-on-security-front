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
  style?: string | undefined;
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
                  onClick={() => scrollTo(getRefByName(t(`${postName}:toc.${keyName}`) as string))}
                >
                  {t(`${postName}:toc.${keyName}`)}
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

  const generateLists = (
    items: any,
    type?: string | undefined,
    style?: string | undefined
  ) => {

    const iterateList = (items: any) => (
      items.map((item: any, index: number) => {
        if (typeof item === 'string') {
          return (
            <li
              key={item}
              className={`blog-post-li ${locale === 'en' ? 'en' : 'non-en'}`}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          );
        } else if (Array.isArray(item)) {
          return (
            <span
              key={index}
              className={`blog-post-li ${locale === 'en' ? 'en' : 'non-en'}`}
            >
              {generateLists(item, '', 'no-margin')}
            </span>
          );
        } else {
          return (
            <span
              key={index}
              className={`blog-post-li ${locale === 'en' ? 'en' : 'non-en'}`}
            >
              {generateLists(item.items, item.type, item.style)}
            </span>
          );
        }
      })
    );

    const CreatedList = ({
      items,
      type,
      style
    }: {
      items: any,
      type?: string | undefined,
      style?: string | undefined
    }) : JSX.Element => {
      if (type === 'list-bullet' || type === '') {
        return (
          <ul className={`blog-post-ul ${style || ''}`}>
            {iterateList(items)}
          </ul>
        );
      } else {
        return (
          <ol className={`blog-post-ol ${style || ''}`}>
            {iterateList(items)}
          </ol>
        );
      }
    };

    return <CreatedList items={items} type={type} style={style} />;
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

    const contentObj: ArticleContentObject[] = t(`${postName}:content`, { returnObjects: true });

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
        <title>{t('pages:home.name')} | {t(`${postName}:title`)}</title>
        <meta name={'keywords'} content={t(`${postName}:tags`) as string} />
        <meta name={'description'} content={t(`${postName}:description`) as string} />
        <meta charSet={'utf-8'} />
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <ArticleBodyWrapper className={locale === 'en' ? 'en' : 'non-en'}>
          <ArticleTitle>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(75)
                  .typeString(t(`${postName}:title`))
                  .start();
              }}
            />
          </ArticleTitle>

          <ArticleTitle className={'intro'}>
            {t(`${postName}:intro`)}
          </ArticleTitle>

          <TableOfContentsContainer className={locale === 'en' ? 'en' : 'non-en'}>
            <TableOfContentsTitle>
              {t('common:tocTitle')}
            </TableOfContentsTitle>
            {generateTableOfContents(t(`${postName}:toc`, { returnObjects: true }))}
          </TableOfContentsContainer>

          {
            (t(`${postName}:content`, { returnObjects: true }) as ArticleContentObject[])
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
                    generateLists(item.items, item.type, item.style)
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
              Object.entries(t(`${postName}:references`, { returnObjects: true }) as IReference[]).map(([key, value]) => (
                <ul key={key}>
                  <li className={'table-of-contents-ul'}>
                    <a href={value.link}>{value.name}</a>
                  </li>
                </ul>
              ))
            }
          </TableOfContentsContainer>

          <PostFooter
            timestamp={t(`${postName}:timestamp`) as string}
            message={t(`${postName}:footer`) as string}
            locale={locale}
          />
        </ArticleBodyWrapper>
      </DefaultLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const staticProps = await makeStaticProps()(ctx);
  const props = staticProps.props;

  return {
    props: {
      ...props
    }
  };
};

export default BlogPost;
