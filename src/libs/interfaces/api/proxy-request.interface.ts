import { Controller } from '@interfaces/controller.enum';
import { Method } from '@interfaces/methods.enum';
import { ArticleEndpoint } from '@interfaces/article.enum';
import { CategoryEndpoint } from '@interfaces/category.enum';
import { NewslettersEndpoint } from '@interfaces/newsletters.enum';

type EndpointsType = ArticleEndpoint | CategoryEndpoint | NewslettersEndpoint;

export interface ProxyRequestInterface {
  controller: Controller;
  action: EndpointsType;
  method: Method;
  payload?: object;
  params?: any;
}
