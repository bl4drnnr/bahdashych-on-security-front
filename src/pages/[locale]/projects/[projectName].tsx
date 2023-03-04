import React, { RefObject } from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import DefaultLayout from '@layouts/Default.layout';
import { makeStaticProps } from '@lib/getStatic';
import {
  Container,
  ImageWrapper,
  ProjectBrief,
  ProjectHr,
  ProjectParagraph,
  ProjectTitle,
  SideBar,
  SideBarParagraph,
  SideBarProjectInfo,
  SideBarTableOfContents,
  SideBarTitle
} from '@styles/project.style';

interface BadgeProps {
  src: string;
  width: number;
  height: number;
}

interface ProjectProps {
  locale: string;
  projectName: string;
}

interface ProjectContentObject {
  type?: string | undefined;
  content?: string | undefined;
}

const Project = ({ locale, projectName }: ProjectProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [listTocRefs, setListTocRefs] = React.useState<RefObject<unknown>[]>([]);
  const [refNames, setRefNames] = React.useState<Array<string>>([]);

  const getRefByName = (refName: string | undefined): any => {
    let matchingRef = null;
    refNames.forEach((item, index) => {
      if (item === refName && !refName.includes('.')) {
        matchingRef = listTocRefs[index];
      } else {
        const splitRefName = refName?.split('.');
        if (splitRefName && splitRefName[splitRefName.length - 1] === item) {
          matchingRef = listTocRefs[index];
        }
      }
    });
    return matchingRef;
  };

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
                  onClick={() => scrollTo(getRefByName(t(`${projectName}:toc.${keyName}`) as string))}
                >
                  {t(`${projectName}:toc.${keyName}`)}
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

  React.useEffect(() => {
    // @ts-ignore
    const availablePosts = process.env.NEXT_PUBLIC_AVAILABLE_PROJECTS.split(',');
    if (!availablePosts.includes(projectName)) handleRedirect('/404').then();

    let quantityOfTitles = 0;
    const allRefs: Array<string> = [];

    const contentObj: ProjectContentObject[] = t(`${projectName}:content`, { returnObjects: true });

    contentObj.forEach((item: ProjectContentObject | string) => {
      if (
        typeof item !== 'string' &&
        (item.type === 'title' || item.type === 'subtitle' || item.type === 'subsubtitle')
      ) {
        quantityOfTitles += 1;
        allRefs.push(item.content as string);
      }
    });

    setListTocRefs(Array(quantityOfTitles).fill(null).map(() => React.createRef()));

    setRefNames(allRefs);
  }, [t]);

  const [otherTechs, ] = React.useState<Array<BadgeProps>>([
    { src: 'javascript', width: 126, height: 28 },
    { src: 'typescript', width: 126, height: 28 },
    { src: 'react', width: 85, height: 28 },
    { src: 'next.js', width: 85, height: 28 },
    { src: 'digitalOcean', width: 130, height: 28 },
    { src: 'amazon-aws', width: 74, height: 28 },
    { src: 'nginx', width: 88, height: 28 },
  ]);

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  return (
    <>
      <Head>
        <title>{t('pages:home.name')} | {t(`${projectName}:title`)}</title>
        <meta name={'keywords'} content={t(`${projectName}:tags`) as string} />
        <meta name={'description'} content={t(`${projectName}:description`) as string} />
        <meta charSet={'utf-8'} />
      </Head>
      <DefaultLayout locale={locale} translation={t}>
        <Container className={locale === 'en' ? 'en' : 'non-en'}>
          <ProjectTitle>{t(`${projectName}:title`)}</ProjectTitle>
          <ProjectBrief>{t(`${projectName}:brief`)}</ProjectBrief>
          <ProjectHr />

          <SideBar>
            <SideBarTableOfContents>
              {generateTableOfContents(t(`${projectName}:toc`, { returnObjects: true }))}
            </SideBarTableOfContents>

            <SideBarProjectInfo>
              <SideBarTitle>Brief:</SideBarTitle>
              <SideBarParagraph>{t(`${projectName}:briefDescription`)}</SideBarParagraph>
              <SideBarTitle>GitHub page:</SideBarTitle>
              <SideBarParagraph>github.com/bl4drnnr/personal-blog</SideBarParagraph>
              <SideBarTitle>License:</SideBarTitle>
              <SideBarParagraph>Licensed by: MIT</SideBarParagraph>
              <SideBarTitle>Project technology stack:</SideBarTitle>
              <ImageWrapper>
                {otherTechs.map((item, index) => (
                  <Image
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/technologies-badges/${item.src}.svg`}
                    className={'img'}
                    alt={item.src}
                    width={item.width}
                    height={item.height}
                  />
                ))}
              </ImageWrapper>
            </SideBarProjectInfo>
          </SideBar>

          <ProjectParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus doloribus ex expedita necessitatibus neque nobis, nulla quam repellat tenetur! Aspernatur beatae doloremque, enim eos error, esse excepturi facilis ipsam laboriosam magni molestias nam officiis quis soluta unde! Ad alias amet atque beatae consequatur delectus dicta ducimus eaque eligendi eos est eum ex facilis laudantium natus nemo nesciunt obcaecati ratione reiciendis, similique sint sit temporibus vel voluptatibus voluptatum! Architecto asperiores assumenda consequuntur cupiditate debitis dignissimos distinctio eaque fugiat iusto maxime molestiae nihil nobis quas quod recusandae, vel veritatis, vero. Accusamus alias aliquam aperiam aspernatur consectetur consequuntur deserunt, dignissimos, eius, fugit itaque labore nesciunt non nostrum odit officia perspiciatis possimus quo quod rem repellat sed ut voluptas. At consectetur consequatur cumque distinctio, dolores eaque est exercitationem facere illum laboriosam magnam necessitatibus perferendis perspiciatis possimus provident, quae quos ratione sapiente similique sint ut veritatis, vitae. A accusamus accusantium atque consectetur delectus laudantium molestiae nam officia omnis possimus repellat, vitae? A ad, autem consectetur consequatur corporis dignissimos distinctio ducimus ea eligendi esse facere fugit impedit inventore labore molestiae molestias natus nemo non possimus provident qui quidem quisquam quo reiciendis repellendus repudiandae rerum saepe soluta sunt tempore temporibus totam unde, ut voluptate voluptatem voluptatum?</ProjectParagraph>
          <ProjectParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus doloribus ex expedita necessitatibus neque nobis, nulla quam repellat tenetur! Aspernatur beatae doloremque, enim eos error, esse excepturi facilis ipsam laboriosam magni molestias nam officiis quis soluta unde! Ad alias amet atque beatae consequatur delectus dicta ducimus eaque eligendi eos est eum ex facilis laudantium natus nemo nesciunt obcaecati ratione reiciendis, similique sint sit temporibus vel voluptatibus voluptatum! Architecto asperiores assumenda consequuntur cupiditate debitis dignissimos distinctio eaque fugiat iusto maxime molestiae nihil nobis quas quod recusandae, vel veritatis, vero. Accusamus alias aliquam aperiam aspernatur consectetur consequuntur deserunt, dignissimos, eius, fugit itaque labore nesciunt non nostrum odit officia perspiciatis possimus quo quod rem repellat sed ut voluptas. At consectetur consequatur cumque distinctio, dolores eaque est exercitationem facere illum laboriosam magnam necessitatibus perferendis perspiciatis possimus provident, quae quos ratione sapiente similique sint ut veritatis, vitae. A accusamus accusantium atque consectetur delectus laudantium molestiae nam officia omnis possimus repellat, vitae? A ad, autem consectetur consequatur corporis dignissimos distinctio ducimus ea eligendi esse facere fugit impedit inventore labore molestiae molestias natus nemo non possimus provident qui quidem quisquam quo reiciendis repellendus repudiandae rerum saepe soluta sunt tempore temporibus totam unde, ut voluptate voluptatem voluptatum?</ProjectParagraph>
          <ProjectParagraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus doloribus ex expedita necessitatibus neque nobis, nulla quam repellat tenetur! Aspernatur beatae doloremque, enim eos error, esse excepturi facilis ipsam laboriosam magni molestias nam officiis quis soluta unde! Ad alias amet atque beatae consequatur delectus dicta ducimus eaque eligendi eos est eum ex facilis laudantium natus nemo nesciunt obcaecati ratione reiciendis, similique sint sit temporibus vel voluptatibus voluptatum! Architecto asperiores assumenda consequuntur cupiditate debitis dignissimos distinctio eaque fugiat iusto maxime molestiae nihil nobis quas quod recusandae, vel veritatis, vero. Accusamus alias aliquam aperiam aspernatur consectetur consequuntur deserunt, dignissimos, eius, fugit itaque labore nesciunt non nostrum odit officia perspiciatis possimus quo quod rem repellat sed ut voluptas. At consectetur consequatur cumque distinctio, dolores eaque est exercitationem facere illum laboriosam magnam necessitatibus perferendis perspiciatis possimus provident, quae quos ratione sapiente similique sint ut veritatis, vitae. A accusamus accusantium atque consectetur delectus laudantium molestiae nam officia omnis possimus repellat, vitae? A ad, autem consectetur consequatur corporis dignissimos distinctio ducimus ea eligendi esse facere fugit impedit inventore labore molestiae molestias natus nemo non possimus provident qui quidem quisquam quo reiciendis repellendus repudiandae rerum saepe soluta sunt tempore temporibus totam unde, ut voluptate voluptatem voluptatum?</ProjectParagraph>
        </Container>
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

export default Project;
