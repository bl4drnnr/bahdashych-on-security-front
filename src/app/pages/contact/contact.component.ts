import { Component } from '@angular/core';
import { ContactService } from '@shared/services/contact.service';
import { GlobalMessageService } from '@shared/global-message.service';

@Component({
  selector: 'page-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string;
  email: string;
  message: string;

  constructor(
    private readonly contactService: ContactService,
    private readonly globalMessageService: GlobalMessageService
  ) {}

  contact() {
    const payload = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.contactService.contact({ ...payload }).subscribe({
      next: ({ message }) => {
        this.name = '';
        this.email = '';
        this.message = '';

        this.globalMessageService.handle({ message });
      },
      error: () => {}
    });
  }
}
