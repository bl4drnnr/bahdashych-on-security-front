import React from 'react';

import Image from 'next/image';

import { ChangeThemeProps } from '@components/ChangeTheme/ChangeTheme.interface';
import { Toggler } from '@styles/ChangeTheme.style';

const ChangeTheme = ({ theme, onClick }: ChangeThemeProps) => {
  return (
    <Toggler onClick={onClick}>
      {theme === 'dark' ? (
        <><Image src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/icons/sun.svg`} alt={'Sun'} width={30} height={30}/></>
      ) : (
        <><Image src={`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/icons/moon.svg`} alt={'Moon'} width={30} height={30}/></>
      )}
    </Toggler>
  );
};

export default ChangeTheme;
