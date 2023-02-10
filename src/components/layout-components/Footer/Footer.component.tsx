import { useRouter } from 'next/router';

import { FooterProps } from '@components/Footer/Footer.interface';
import { Box, Container } from '@styles/Footer.style';

export const Footer = ({ locale, translation }: FooterProps) => {
  const router = useRouter();

  return (
    <Container>
      <Box></Box>
    </Container>
  );
};
