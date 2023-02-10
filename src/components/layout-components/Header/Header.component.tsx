import React from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { HeaderProps } from '@components/Header/Header.interace';
import { theme } from '@store/global/global.state';
import { Box, Container, Link } from '@styles/Header.style';

export const Header = () => {
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
    await router.push(path);
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
        >Home</Link>
        <Link
          onClick={() => handleRedirect('/blog')}
        >Blog</Link>
        <Link
          onClick={() => handleRedirect('/about')}
        >About</Link>
      </Box>
    </Container>
  );
};
