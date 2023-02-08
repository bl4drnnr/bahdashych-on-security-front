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

  React.useEffect(() => {
    const theme = localStorage.getItem('theme') as 'dark' | 'light';
    if (['dark', 'light'].includes(theme)) setTheme(theme);
  }, []);

  return (
    <Container>
      <Box>
        <Link>Home</Link>
        <Link>Blog</Link>
        <Link>About</Link>
      </Box>
    </Container>
  );
};
