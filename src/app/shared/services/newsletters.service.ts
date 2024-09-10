import { Injectable } from '@angular/core';
import { ApiService } from '@shared/api.service';
import { Method } from '@interfaces/methods.enum';
import { Controller } from '@interfaces/controller.enum';
import { NewslettersEndpoint } from '@interfaces/newsletters.enum';
import { Observable } from 'rxjs';
import { SubscribeToNewslettersResponse } from '@responses/subscribe-to-newsletters.interface';

@Injectable({
  providedIn: 'root'
})
export class NewslettersService {
  constructor(private readonly apiService: ApiService) {}

  subscribeToNewsletters(
    email: string
  ): Observable<SubscribeToNewslettersResponse> {
    return this.apiService.apiProxyRequest({
      method: Method.POST,
      controller: Controller.NEWSLETTERS,
      action: NewslettersEndpoint.SUBSCRIBE,
      payload: { email },
      params: { language: 'en' }
    });
  }
}
