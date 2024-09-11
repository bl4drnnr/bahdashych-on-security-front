import { ErrorMessagesInterface } from '@interfaces/error-message.interface';

export interface ErrorPayloadInterface {
  message?: string;
  messages?: Array<ErrorMessagesInterface>;
}
