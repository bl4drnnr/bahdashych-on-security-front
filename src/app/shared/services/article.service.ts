import { Observable } from 'rxjs';
import { ApiService } from '@shared/api.service';
import { Controller } from '@interfaces/controller.enum';
import { Method } from '@interfaces/methods.enum';
import { ArticleEndpoint } from '@interfaces/article.enum';
import { Injectable } from '@angular/core';
import { Article } from '@interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private readonly apiService: ApiService) {}

  getArticleBySlug(slug: string): Observable<Article> {
    return this.apiService.apiProxyRequest({
      method: Method.GET,
      controller: Controller.ARTICLE,
      action: ArticleEndpoint.GET_BY_SLUG,
      params: { slug }
    });
  }
}
