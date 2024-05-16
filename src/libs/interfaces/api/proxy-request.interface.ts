import { Controller } from '@interfaces/controller.enum';
import { Method } from '@interfaces/methods.enum';
import { ArticleEndpoint } from '@interfaces/article.enum';

type EndpointsType = ArticleEndpoint;

export interface ProxyRequestInterface {
  controller: Controller;
  action: EndpointsType;
  method: Method;
  payload?: object;
  params?: any;
}
