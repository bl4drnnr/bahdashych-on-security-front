import React from 'react';

import Image from 'next/image';

import { ChangeThemeProps } from '@components/ChangeTheme/ChangeTheme.interface';
import { Toggler } from '@styles/ChangeTheme.style';

const ChangeTheme = ({ theme, onClick }: ChangeThemeProps) => {
  return (
    <Toggler onClick={onClick}>
      {theme === 'dark' ? (
        <><Image src={'/img/sun.svg'} alt={'Sun'} width={30} height={30}/></>
      ) : (
        <><Image src={'/img/moon.svg'} alt={'Moon'} width={30} height={30}/></>
      )}
    </Toggler>
  );
};

export default ChangeTheme;
