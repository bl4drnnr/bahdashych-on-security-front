import { SocialLinkInterface } from '@interfaces/social-link.interface';

export interface AboutTeamInterface {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  socialLinks: Array<SocialLinkInterface>;
}
