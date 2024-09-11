import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HandleGlobalMessageInterface } from '@interfaces/handle-global-message.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalMessageService {
  message$ = new Subject<string>();
  isError = false;
  isWarning = false;

  handle({
    message,
    isError = false,
    isWarning = false
  }: HandleGlobalMessageInterface) {
    this.message$.next(message);
    this.isError = isError;
    this.isWarning = isWarning;
  }

  async handleError({ message }: HandleGlobalMessageInterface) {
    this.handle({ message, isError: true });
  }

  async handleWarning({ message }: HandleGlobalMessageInterface) {
    this.handle({ message, isWarning: true });
  }

  clear() {
    this.message$.next('');
    this.isError = false;
  }
}
