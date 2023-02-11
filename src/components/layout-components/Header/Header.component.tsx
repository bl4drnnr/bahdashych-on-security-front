import React from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import ChangeLanguage from '@components/ChangeLanguage/ChangeLanguage.component';
import ChangeTheme from '@components/ChangeTheme/ChangeTheme.component';
import { HeaderProps } from '@components/Header/Header.interace';
import { theme } from '@store/global/global.state';
import { Box, Container, LanguageContainer, Link, ThemeContainer } from '@styles/Header.style';

export const Header = ({ locale, translation }: HeaderProps) => {
  const router = useRouter();
  const [currentTheme, setCurrentTheme] = useRecoilState(theme);

  const setTheme = (theme: 'dark' | 'light') => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    if (currentTheme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  const handleRedirect = async (path: string) => {
    await router.push(`/${locale}${path}`);
  };

  React.useEffect(() => {
    const theme = localStorage.getItem('theme') as 'dark' | 'light';
    if (['dark', 'light'].includes(theme)) setTheme(theme);
  }, []);

  return (
    <Container>
      <Box>
        <Link
          onClick={() => handleRedirect('/')}
        >{translation('components:header.home')}</Link>
        <Link
          onClick={() => handleRedirect('/blog')}
        >{translation('components:header.blog')}</Link>
        <Link
          onClick={() => handleRedirect('/projects')}
        >{translation('components:header.projects')}</Link>
        <Link
          onClick={() => handleRedirect('/about')}
        >{translation('components:header.about')}</Link>
      </Box>

      <LanguageContainer>
        <ChangeLanguage
          path={router.asPath}
          defaultLanguage={locale}
        />
      </LanguageContainer>

      <ThemeContainer>
        <ChangeTheme
          theme={currentTheme}
          onClick={() => toggleTheme()}
        />
      </ThemeContainer>
    </Container>
  );
};
