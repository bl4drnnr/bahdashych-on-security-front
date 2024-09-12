import { SocialLinkInterface } from '@interfaces/social-link.interface';

export interface AboutTeamCellInterface {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  socialLinks: Array<SocialLinkInterface>;
}
