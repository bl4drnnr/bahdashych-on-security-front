import { CompanyPositionInterface } from '@interfaces/company-position.interface';

export interface AboutExperienceCellInterface {
  companyName: string;
  companyDescription: string;
  companyLink: string;
  companyLinkTitle: string;
  companyPicture: string;
  startDate: Date;
  endDate: Date | string;
  companyPositions: Array<CompanyPositionInterface>;
}
