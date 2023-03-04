import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import DefaultLayout from '@layouts/Default.layout';
import { makeStaticProps } from '@lib/getStatic';
import {
  Container,
  ProjectBrief, ProjectHr, ProjectParagraph,
  ProjectTitle,
  SideBar
} from '@styles/project.style';

interface ProjectProps {
  locale: string;
  projectName: string;
}

const Project = ({ locale, projectName }: ProjectProps) => {
  const { t } = useTranslation();
  const router = useRouter();

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
          <SideBar></SideBar>
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
