import { ApiService } from '@shared/api.service';
import { Injectable } from '@angular/core';
import { Method } from '@interfaces/methods.enum';
import { Controller } from '@interfaces/controller.enum';
import { ContactEndpoint } from '@interfaces/contact.enum';
import { ContactPayload } from '@payloads/contact.interface';
import { Observable } from 'rxjs';
import { ContactedResponse } from '@responses/contacted.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private readonly apiService: ApiService) {}

  contact(payload: ContactPayload): Observable<ContactedResponse> {
    return this.apiService.apiProxyRequest({
      method: Method.POST,
      controller: Controller.CONTACT,
      action: ContactEndpoint.CONTACT,
      payload
    });
  }
}
