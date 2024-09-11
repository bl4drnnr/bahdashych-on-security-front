import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { GlobalMessageService } from '@shared/global-message.service';
import { ErrorPayloadInterface } from '@interfaces/error-payload.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  constructor(private readonly globalMessageService: GlobalMessageService) {}

  async errorHandler(error: HttpErrorResponse) {
    const errorPayload: ErrorPayloadInterface = error.error;
    let displayErrorMessage = '';

    if (errorPayload.message) {
      await this.globalMessageService.handleError({
        message: errorPayload.message
      });
    } else if (errorPayload.messages) {
      for (const messageItem of errorPayload.messages) {
        for (const message of messageItem.error) {
          displayErrorMessage += `${message}<br>`;
        }
      }

      this.globalMessageService.handle({
        message: displayErrorMessage,
        isError: true
      });
    }

    setTimeout(() => {
      this.globalMessageService.clear();
    }, 10000);

    return throwError(() => displayErrorMessage);
  }
}
