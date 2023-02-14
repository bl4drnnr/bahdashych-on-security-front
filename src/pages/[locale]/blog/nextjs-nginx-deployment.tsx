import React, { useRef } from 'react';

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

  const introRef = useRef(null);
  const whyNginxRef = useRef(null);
  const preparationsRef = useRef(null);
  const httpsConfigRef = useRef(null);
  const certGenRef = useRef(null);
  const nginxSecRef = useRef(null);
  const nginxConfRef = useRef(null);
  const appConfRef = useRef(null);
  const conclusionRef = useRef(null);

  const scrollTo = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

          <TableOfContentsContainer>
            <TableOfContentsTitle>
              {t('articles:nextjsNginxDeployment.toc.title')}
            </TableOfContentsTitle>
            <TableOfContentsOl>
              <TableOFContentsLi onClick={() => scrollTo(introRef)}>
                {t('articles:nextjsNginxDeployment.toc.intro')}
              </TableOFContentsLi>
              <TableOFContentsLi onClick={() => scrollTo(whyNginxRef)}>
                {t('articles:nextjsNginxDeployment.toc.whyNginx')}
              </TableOFContentsLi>
              <TableOFContentsLi onClick={() => scrollTo(preparationsRef)}>
                {t('articles:nextjsNginxDeployment.toc.preps')}
              </TableOFContentsLi>
              <TableOFContentsLi
                onClick={() => scrollTo(httpsConfigRef)}
              >{t('articles:nextjsNginxDeployment.toc.httpsConfig')}
                <TableOfContentsOl>
                  <TableOFContentsLi onClick={() => scrollTo(certGenRef)}>
                    {t('articles:nextjsNginxDeployment.toc.certGen')}
                  </TableOFContentsLi>
                  <TableOFContentsLi onClick={() => scrollTo(nginxSecRef)}>
                    {t('articles:nextjsNginxDeployment.toc.nginxSec')}
                  </TableOFContentsLi>
                </TableOfContentsOl>
              </TableOFContentsLi>
              <TableOFContentsLi onClick={() => scrollTo(nginxConfRef)}>
                {t('articles:nextjsNginxDeployment.toc.nginxConfig')}
              </TableOFContentsLi>
              <TableOFContentsLi  onClick={() => scrollTo(appConfRef)}>
                {t('articles:nextjsNginxDeployment.toc.appConfig')}
              </TableOFContentsLi>
              <TableOFContentsLi onClick={() => scrollTo(conclusionRef)}>
                {t('articles:nextjsNginxDeployment.toc.conclusion')}
              </TableOFContentsLi>
            </TableOfContentsOl>
          </TableOfContentsContainer>

          <PostParagraph className={'title'} ref={introRef}>
            {t('articles:nextjsNginxDeployment.toc.intro')}
          </PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p1')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p2')}</PostParagraph>

          <PostParagraph className={'title'} ref={whyNginxRef}>
            {t('articles:nextjsNginxDeployment.toc.whyNginx')}
          </PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p3')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p4')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p5')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p6')}</PostParagraph>

          <PostParagraph className={'title'} ref={preparationsRef}>
            {t('articles:nextjsNginxDeployment.toc.preps')}
          </PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p7')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p8')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo apt update && sudo apt upgrade\n$ sudo apt install nginx letsencrypt'}
          />
          <PostParagraph>{t('articles:nextjsNginxDeployment.p9')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo ufw allow \'Nginx Full\''}
          />
          <PostParagraph>{t('articles:nextjsNginxDeployment.p10')}</PostParagraph>
          <CodeHighlighter
            language={'bash'}
            code={'$ sudo vim /etc/nginx/sites-available/default'}
          />
          <CodeHighlighter
            language={'nginx'}
            code={'' +
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
              '  # letsencrypt\n' +
              '  location ~ /.well-known {\n' +
              '    allow all;\n' +
              '  }\n' +
              '}'}
          />
          <PostParagraph>{t('articles:nextjsNginxDeployment.p11')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo nginx -t\n' +
              'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\n' +
              'nginx: configuration file /etc/nginx/nginx.conf test is successful\n' +
              '$ sudo systemctl restart nginx'}
          />

          <PostParagraph className={'title'} ref={httpsConfigRef}>
            {t('articles:nextjsNginxDeployment.toc.httpsConfig')}
          </PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p12')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p13')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p14')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p15')}</PostParagraph>

          <PostParagraph className={'subtitle'} ref={certGenRef}>
            {t('articles:nextjsNginxDeployment.toc.certGen')}
          </PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p16')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo letsencrypt certonly -a webroot --webroot-path=/var/www/html -d *q'}
          />
          <PostParagraph>{t('articles:nextjsNginxDeployment.p17')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048'}
          />

          <PostParagraph className={'subtitle'} ref={nginxSecRef}>
            {t('articles:nextjsNginxDeployment.toc.nginxSec')}
          </PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p18')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo vim /etc/nginx/snippets/ssl-params.conf'}
          />
          <CodeHighlighter
            language={'bash'}
            code={'ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n' +
              'ssl_prefer_server_ciphers on;\n' +
              'ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";\n' +
              'ssl_ecdh_curve secp384r1;\n' +
              'ssl_session_cache shared:SSL:10m;\n' +
              'ssl_session_tickets off;\n' +
              'ssl_stapling on;\n' +
              'ssl_stapling_verify on;\n' +
              '\n' +
              'resolver 8.8.8.8 8.8.4.4 valid=300s;\n' +
              'resolver_timeout 5s;\n' +
              '\n' +
              'add_header Strict-Transport-Security "max-age=63072000; includeSubdomains";\n' +
              'add_header X-Frame-Options DENY;\n' +
              'add_header X-Content-Type-Options nosniff;\n' +
              '\n' +
              'ssl_dhparam /etc/ssl/certs/dhparam.pem;'}
          />

          <PostParagraph className={'title'} ref={nginxConfRef}>
            {t('articles:nextjsNginxDeployment.toc.nginxConfig')}
          </PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p19')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p20')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo vim /etc/nginx/sites-available/default'}
          />
          <CodeHighlighter
            language={'nginx'}
            code={
              '# redirect http to https\n' +
              'server {\n' +
              '  listen 80 default_server;\n' +
              '  listen [::]:80 default_server;\n' +
              '  server_name *q;\n' +
              '  return 301 https://$server_name$request_uri;\n' +
              '}\n' +
              '\n' +
              'server {\n' +
              '  # listen on *:443 -> ssl; instead of *:80\n' +
              '  listen 443 ssl http2 default_server;\n' +
              '  listen [::]:443 ssl http2 default_server;\n' +
              '\n' +
              '  server_name q*;\n' +
              '\n' +
              '  ssl_certificate /etc/letsencrypt/live/*q/fullchain.pem;\n' +
              '  ssl_certificate_key /etc/letsencrypt/live/*q/privkey.pem;\n' +
              '  include snippets/ssl-params.conf;\n' +
              '\n' +
              '  location / {\n' +
              '    # reverse proxy for next server\n\n' +
              '    # It is important to mention that you need to change port\n' +
              '    # for application on port application uses when is started\n' +
              '    # after build.\n' +
              '    proxy_pass http://localhost:8080;\n' +
              '    proxy_http_version 1.1;\n' +
              '    proxy_set_header Upgrade $http_upgrade;\n' +
              '    proxy_set_header Connection \'upgrade\';\n' +
              '    proxy_set_header Host $host;\n' +
              '    proxy_cache_bypass $http_upgrade;\n' +
              '\n' +
              '    # we need to remove this 404 handling\n' +
              '    # because next\'s _next folder and own handling\n' +
              '    # try_files $uri $uri/ =404;\n' +
              '  }\n' +
              '\n' +
              '  location ~ /.well-known {\n' +
              '    allow all;\n' +
              '  }\n' +
              '}'}
          />
          <PostParagraph>{t('articles:nextjsNginxDeployment.p21')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo service nginx restart'}
          />

          <PostParagraph className={'title'} ref={appConfRef}>
            {t('articles:nextjsNginxDeployment.toc.appConfig')}
          </PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p22')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p23')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p24')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p25')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p26')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ npm run build # build our app for production (npm build script: next build)\n' +
              '$ npm i -g pm2 # install pm2 to keep next app alive forever*\n' +
              '$ pm2 start npm --name "next" -- start # start next app (npm start script: next start)\n'}
          />
          <PostParagraph>{t('articles:nextjsNginxDeployment.p27')}</PostParagraph>

          <PostParagraph className={'title'} ref={conclusionRef}>
            {t('articles:nextjsNginxDeployment.toc.conclusion')}
          </PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p28')}</PostParagraph>
          <PostParagraph>{t('articles:nextjsNginxDeployment.p29')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ git pull origin master\n' +
              '$ npm i\n' +
              '$ npm run build\n' +
              '$ pm2 restart blog'}
          />
          <PostParagraph>{t('articles:nextjsNginxDeployment.p30')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ pm2 list'}
          />
          <PostParagraph>{t('articles:nextjsNginxDeployment.p31')}</PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ pm2 restart 0 --name "new-name"'}
          />
          <PostParagraph>
            {t('articles:nextjsNginxDeployment.p32')}
          </PostParagraph>
          <CodeHighlighter
            language={'bash'}
            code={'# Update and upgrade all packages and install required programs\n' +
              '$ sudo apt update && sudo apt upgrade\n$ sudo apt install nginx letsencrypt'
              }
          />
          <CodeHighlighter
            language={'bash'}
            code={'# Also enable nginx in ufw\n' +
              '$ sudo ufw allow \'Nginx Full\''
            }
          />
          <CodeHighlighter
            language={'bash'}
            code={'# Paste next content in sites-available/default file and test the server\n' +
              '$ sudo vim /etc/nginx/sites-available/default'}
          />
          <CodeHighlighter
            language={'nginx'}
            code={'# Replace *q with your domain name\n' +
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
          />
          <CodeHighlighter
            language={'bash'}
            code={'# Check for syntax error and restart the server\n' +
              '$ sudo nginx -t\n' +
              'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\n' +
              'nginx: configuration file /etc/nginx/nginx.conf test is successful\n' +
              '$ sudo systemctl restart nginx'}
          />
          <CodeHighlighter
            language={'bash'}
            code={'# Generate the TLS certificate (replace *q with your domain name)\n' +
              '$ sudo letsencrypt certonly -a webroot --webroot-path=/var/www/html -d *q'}
          />
          <CodeHighlighter
            language={'bash'}
            code={'# Generate Diffie-Hellman (DH) params\n' +
              '$ sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048'}
          />
          <CodeHighlighter
            language={'bash'}
            code={'# Secure our Nginx server by pasting next into config file\n' +
              '$ sudo vim /etc/nginx/snippets/ssl-params.conf'}
          />
          <CodeHighlighter
            language={'bash'}
            code={'ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n' +
              'ssl_prefer_server_ciphers on;\n' +
              'ssl_ciphers "EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH";\n' +
              'ssl_ecdh_curve secp384r1;\n' +
              'ssl_session_cache shared:SSL:10m;\n' +
              'ssl_session_tickets off;\n' +
              'ssl_stapling on;\n' +
              'ssl_stapling_verify on;\n' +
              '\n' +
              'resolver 8.8.8.8 8.8.4.4 valid=300s;\n' +
              'resolver_timeout 5s;\n' +
              '\n' +
              'add_header Strict-Transport-Security "max-age=63072000; includeSubdomains";\n' +
              'add_header X-Frame-Options DENY;\n' +
              'add_header X-Content-Type-Options nosniff;\n' +
              '\n' +
              'ssl_dhparam /etc/ssl/certs/dhparam.pem;'}
          />
          <CodeHighlighter
            language={'bash'}
            code={'# Paste next config into file\n' +
              '# Remember about port of localhost and replacing *q with domain name\n' +
              '$ sudo vim /etc/nginx/sites-available/default'}
          />
          <CodeHighlighter
            language={'nginx'}
            code={
              'server {\n' +
              '  listen 80 default_server;\n' +
              '  listen [::]:80 default_server;\n' +
              '  server_name *q;\n' +
              '  return 301 https://$server_name$request_uri;\n' +
              '}\n' +
              '\n' +
              'server {\n' +
              '  listen 443 ssl http2 default_server;\n' +
              '  listen [::]:443 ssl http2 default_server;\n' +
              '\n' +
              '  server_name q*;\n' +
              '\n' +
              '  ssl_certificate /etc/letsencrypt/live/*q/fullchain.pem;\n' +
              '  ssl_certificate_key /etc/letsencrypt/live/*q/privkey.pem;\n' +
              '  include snippets/ssl-params.conf;\n' +
              '\n' +
              '  location / {\n' +
              '    proxy_pass http://localhost:8080;\n' +
              '    proxy_http_version 1.1;\n' +
              '    proxy_set_header Upgrade $http_upgrade;\n' +
              '    proxy_set_header Connection \'upgrade\';\n' +
              '    proxy_set_header Host $host;\n' +
              '    proxy_cache_bypass $http_upgrade;\n' +
              '  }\n' +
              '\n' +
              '  location ~ /.well-known {\n' +
              '    allow all;\n' +
              '  }\n' +
              '}'}
          />
          <CodeHighlighter
            language={'bash'}
            code={'# Restart the service\n' +
              '$ sudo service nginx restart'}
          />
          <CodeHighlighter
            language={'shell'}
            code={'# Build and start the application\n' +
              '$ npm run build # build our app for production (npm build script: next build)\n' +
              '$ npm i -g pm2 # install pm2 to keep next app alive forever*\n' +
              '$ pm2 start npm --name "next" -- start # start next app (npm start script: next start)\n'}
          />
          <PostFooter message={'Thank you for reading! I hope you found it useful.'} />
        </ArticleBodyWrapper>
      </DefaultLayout>
    </>
  );
};

const getStaticProps = makeStaticProps(['pages', 'components', 'common', 'articles']);
export { getStaticPaths, getStaticProps };

export default NextjsNginxDeployment;
