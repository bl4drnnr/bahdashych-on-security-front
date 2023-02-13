import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Typewriter from 'typewriter-effect';

import DefaultLayout from '@layouts/Default.layout';
import { getStaticPaths, makeStaticProps } from '@lib/getStatic';
import { ArticleBodyWrapper, ArticleTitle, PostParagraph } from '@styles/post.style';

interface NextjsNginxDeploymentProps {
  locale: string;
}

const NextjsNginxDeployment = ({ locale }: NextjsNginxDeploymentProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

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

          <PostParagraph className={'title'}>Intro</PostParagraph>
          <PostParagraph>The process of deployment of the application is always kind of stress, especially when you are a developer, who has no idea of what DevOps staff does (trust me, I know what I am talking about). Therefore, the only thing you really want is to as fast as possible deploy your application in a more or less secure way.</PostParagraph>
          <PostParagraph>Well, congratulations, you have come to the right place! This article will explain how you can deploy your Next.js application using Nginx in a secure manner and HTTPS encryption.</PostParagraph>
          <PostParagraph>Let’s start!</PostParagraph>

          <PostParagraph className={'title'}>Why Nginx?</PostParagraph>
          <PostParagraph>
            Nginx (pronounced &quot;engine-x&quot;) is a high-performance, open-source web server. It is a reverse proxy server, which means it is designed to pass incoming requests from clients to other servers for further processing. This can be useful in a variety of situations, such as serving static files, proxying requests to a backend server, or handling SSL encryption.
          </PostParagraph>
          <PostParagraph>
            Nginx is known for its stability, robustness, and low resource usage, making it a popular choice for web administrators and hosting providers. It can handle a large number of concurrent connections, making it well-suited for high-traffic websites and web applications. It also has a wide range of features and configuration options, including load balancing, caching, and access control.
          </PostParagraph>
          <PostParagraph>
            In addition to its use as a web server, Nginx can also be used as a reverse proxy, load balancer, and HTTP cache. This versatility, combined with its performance and stability, has made Nginx a popular choice among web developers and system administrators.
          </PostParagraph>
          <PostParagraph>
            Overall, Nginx is a powerful and flexible web server that is well-suited for a wide range of applications and use cases. Whether you are serving a simple website, running a large web application, or anything in between, Nginx is a great choice for your needs.
          </PostParagraph>

          <PostParagraph className={'title'}>Preparations</PostParagraph>
          <PostParagraph>
            We are not going to discuss how and where you can spin up an instance and harder it (either AWS, DigitalOcean, Microsoft Azure or whatever cloud service provider you like). By the way, you can read about this here (LINK TO POST ABOUT INSTANCES HARDERING). Instead of it, we will focus on process of installation of Nginx, as our web server, and Letsencrypt, as our CA provider, considering you already have an instance for deployment.
          </PostParagraph>
          <PostParagraph>
            Using next 2 commands you will update all packages on your machine and installed required nginx and Letsencrypt.
          </PostParagraph>
          <SyntaxHighlighter language={'bash'}>
            {'$ sudo apt update && sudo apt upgrade\n$ sudo apt install nginx letsencrypt'}
          </SyntaxHighlighter>
          <PostParagraph>
            Also enable nginx in ufw:
          </PostParagraph>
          <SyntaxHighlighter language={'bash'}>
            {'$ sudo ufw allow \'Nginx Full\''}
          </SyntaxHighlighter>
          <PostParagraph>
            Very last step here is checking if our nginx sever is working correctly. In order to do that go to  /etc/nginx/sites-available/default and paste next content:
          </PostParagraph>
          <SyntaxHighlighter language={'bash'}>
            {'# *q is our domain\n' +
              'server {\n' +
              '  listen 80 default_server;\n' +
              '  listen [::]:80 default_server;\n' +
              '\n' +
              '  root /var/www/html;\n' +
              '  index index.html index.htm index.nginx-debian.html;\n' +
              '\n' +
              '  server_name q*;\n' +
              '\n' +
              '  location / {\n' +
              '    try_files $uri $uri/ =404;\n' +
              '  }\n' +
              '\n' +
              '  # for letsencrypt\n' +
              '  location ~ /.well-known {\n' +
              '    allow all;\n' +
              '  }\n' +
              '}'}
          </SyntaxHighlighter>
          <PostParagraph>
            Check for syntax errors and restart nginx:
          </PostParagraph>
          <SyntaxHighlighter language={'bash'}>
            {'$ sudo nginx -t\n' +
              'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\n' +
              'nginx: configuration file /etc/nginx/nginx.conf test is successful\n' +
              '$ sudo systemctl restart nginx'}
          </SyntaxHighlighter>

          <PostParagraph className={'title'}>HTTPS Configuration</PostParagraph>
          <PostParagraph>
            Let&apos;s Encrypt is a free, open-source, and automated certificate authority (CA) that provides digital certificates for Transport Layer Security (TLS) encryption. These certificates are used to secure web traffic and ensure that sensitive information, such as passwords and credit card numbers, are transmitted securely over the internet.
          </PostParagraph>
          <PostParagraph>
            The main goal of Let&apos;s Encrypt is to make encryption more accessible to the general public by offering free and easy-to-use certificates. Prior to Let&apos;s Encrypt, obtaining a certificate could be a complicated and expensive process. With Let&apos;s Encrypt, anyone can obtain a certificate with just a few clicks, making it possible to secure a website or web application with minimal effort.
          </PostParagraph>
          <PostParagraph>
            Let&apos;s Encrypt is also notable for its automated certificate issuance and renewal process. This means that once you have obtained a certificate, you don&apos;t need to worry about manually renewing it in the future. The certificate will automatically renew itself as long as the domain remains active and under your control.
          </PostParagraph>
          <PostParagraph>
            In summary, Let&apos;s Encrypt is a game-changing CA that is making encryption more accessible and affordable for everyone. With its free and easy-to-use certificates, automated renewal process, and commitment to open-source software, Let&apos;s Encrypt is a great choice for anyone looking to secure their website or web application.
          </PostParagraph>

          <PostParagraph className={'subtitle'}>Certificate generating</PostParagraph>
          <PostParagraph className={'subtitle'}>Nginx security configuration</PostParagraph>
          <PostParagraph className={'title'}>Nginx configuration</PostParagraph>
          <PostParagraph className={'title'}>Application setup using pm2</PostParagraph>
          <PostParagraph>
            PM2 is a production process manager for Node.js applications. It is designed to keep your Node.js applications running and be able to recover from unexpected errors or crashes. PM2 provides features such as automatic restart, automatic log management, and process monitoring.
          </PostParagraph>
          <PostParagraph>
            PM2 makes it easy to run Node.js applications in the background as a daemon, without having to worry about the process being terminated or restarted. This is particularly useful for long-running Node.js applications, such as web servers or background workers, as it ensures that they are always available and can recover from any issues that may arise.
          </PostParagraph>
          <PostParagraph>
            In addition to its process management features, PM2 also provides powerful process monitoring capabilities. This includes detailed information about the status and performance of your Node.js applications, such as CPU and memory usage, as well as the ability to manage and inspect log files.
          </PostParagraph>
          <PostParagraph>
            PM2 is a popular tool for managing Node.js applications in production environments, as it makes it easy to keep your applications running and provides a wealth of information about their status and performance. Whether you are running a single Node.js application or multiple applications in a cluster, PM2 is a great tool for managing and monitoring your applications.
          </PostParagraph>
          <PostParagraph className={'title'}>Conclusions and cheatsheet</PostParagraph>
        </ArticleBodyWrapper>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles']);
export { getStaticPaths, getStaticProps };

export default NextjsNginxDeployment;
