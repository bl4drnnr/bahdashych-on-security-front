import { Controller } from '@interfaces/controller.enum';
import { Method } from '@interfaces/methods.enum';
import { ArticleEndpoint } from '@interfaces/article.enum';
import { CategoryEndpoint } from '@interfaces/category.enum';

type EndpointsType = ArticleEndpoint | CategoryEndpoint;

export interface ProxyRequestInterface {
  controller: Controller;
  action: EndpointsType;
  method: Method;
  payload?: object;
  params?: any;
}
