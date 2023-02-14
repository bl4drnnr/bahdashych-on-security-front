import React from 'react';

import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';

import CodeHighlighter from '@components/CodeHighlighter/CodeHighlighter.component';
import PostFooter from '@components/PostFooter/PostFooter.component';
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
          <PostParagraph>Well, congratulations, you have come to the right place! This article will explain how you can deploy your Next.js application using Nginx in a secure manner and HTTPS encryption. So, let’s start!</PostParagraph>

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
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo apt update && sudo apt upgrade\n$ sudo apt install nginx letsencrypt'}
          />
          <PostParagraph>
            Also enable nginx in ufw:
          </PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo ufw allow \'Nginx Full\''}
          />
          <PostParagraph>
            Very last step here is checking if our nginx sever is working correctly. In order to do that go to /etc/nginx/sites-available/default and paste next content (*q is our domain):
          </PostParagraph>
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
              '  # for letsencrypt\n' +
              '  location ~ /.well-known {\n' +
              '    allow all;\n' +
              '  }\n' +
              '}'}
          />
          <PostParagraph>
            Check for syntax errors and restart nginx:
          </PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo nginx -t\n' +
              'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\n' +
              'nginx: configuration file /etc/nginx/nginx.conf test is successful\n' +
              '$ sudo systemctl restart nginx'}
          />

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
          <PostParagraph>
            It&apos;s time to generate some TLS certificates. In this example we are going to use Let&apos;s Encrypt, but you can use any other CA provider you want. As it was mentioned previously, replace *q by your domain name:
          </PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo letsencrypt certonly -a webroot --webroot-path=/var/www/html -d *q'}
          />
          <PostParagraph>
            Next command will generated DH Parameters. These parameters define how OpenSSL performs the Diffie-Hellman (DH) key-exchange. Basically, additional layer of security for your HTTPS connection:
          </PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048'}
          />

          <PostParagraph className={'subtitle'}>Nginx security configuration</PostParagraph>
          <PostParagraph>
            The thing we need to do is to secure our Nginx server by putting next configuration to ssl-params.conf config file. By using your favorite text editor (vim here) copy and paste next content:
          </PostParagraph>
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

          <PostParagraph className={'title'}>Nginx configuration</PostParagraph>
          <PostParagraph>
            We are almost done with the configuration. The 2 very last things we need to do is to configure our Nginx server as a reverse proxy server and start application.
          </PostParagraph>
          <PostParagraph>
            Let&apos;s start with configuration out Nginx as a reverse proxy. Basically, here we need to edit out nginx file and paste next content (remember, *q is for your domain name):
          </PostParagraph>
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
          <PostParagraph>
            Restart the nginx service and the only thing we need to do is to set up our application as a daemon using pm2 process manager.
          </PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ sudo service nginx restart'}
          />

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
          <PostParagraph>
            Basically, here, we need to just build our application, install pm2 application globally and start the process of executed production build as a daemon in the background:
          </PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ npm run build # build our app for production (npm build script: next build)\n' +
              '$ npm i -g pm2 # install pm2 to keep next app alive forever*\n' +
              '$ pm2 start npm --name "next" -- start # start next app (npm start script: next start)\n'}
          />
          <PostParagraph>
            Enjoy your application in production mode and secured HTTPS connection! Below you will also find a couple afterwords and small guidebook on how you can manage your application using this process manager.
          </PostParagraph>

          <PostParagraph className={'title'}>Conclusions and cheatsheet</PostParagraph>
          <PostParagraph>
            Was quite easy, huh? This is the easiest way to configure, deploy and secure your Next.js application using Nginx. But maybe you have a question like: &#34;Okay, that&apos;s fine, but what about CI/CD pipeline?&#34;. Well, that is on yours. You can either configure it using GitHub Actions or Jenkins or whatever CI/CD pipeline tool you prefer. But if you want to know, how you can do deployment manually, here you go.
          </PostParagraph>
          <PostParagraph>
            The very first thing you need to do is to go to your server and go to folder with your project. There, pull the master (main) branch or whatever branch you use in production mode, install all packages, build the project (using npm in this particular example) and restart the pm2 process:
          </PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ git pull origin master\n' +
              '$ npm i\n' +
              '$ npm run build\n' +
              '$ pm2 restart blog'}
          />
          <PostParagraph>
            By the way, I guess you want to change the name of the application on something more human-readable. Here is how you can do that. First of all type next command to get list of all processes handled by pm2:
          </PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ pm2 list'}
          />
          <PostParagraph>
            As a result you will see pretty looking table, take a look at the id column, at this moment, I guess, you will see 0 value, but if not, just replace it on your value and type next to change the name of the process
          </PostParagraph>
          <CodeHighlighter
            language={'shell'}
            code={'$ pm2 restart 0 --name "new-name"'}
          />
          <PostParagraph>
            Cheatsheet specially for you:
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
