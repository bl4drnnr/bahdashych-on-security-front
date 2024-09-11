import { Component, Input } from '@angular/core';
import { LinksListInterface } from '@interfaces/links-list.interface';
import { NewslettersService } from '@shared/services/newsletters.service';
import { GlobalMessageService } from '@shared/global-message.service';

@Component({
  selector: 'component-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() showNewsletter: boolean;

  newslettersSubscriptionEmail: string;
  newslettersSubscriptionSubmitted: boolean = false;
  newslettersSubscriptionSuccess: boolean;
  newslettersSubscriptionFailure: boolean;

  constructor(
    private readonly newslettersService: NewslettersService,
    private readonly globalMessageService: GlobalMessageService
  ) {}

  submitSubscriptionToNewsletters() {
    this.newslettersService
      .subscribeToNewsletters(this.newslettersSubscriptionEmail)
      .subscribe({
        next: () => {
          this.newslettersSubscriptionEmail = '';
          this.newslettersSubscriptionSubmitted = true;
          this.newslettersSubscriptionSuccess = true;

          this.globalMessageService.handle({
            message: 'Your submission has been received!'
          });
        },
        error: () => {
          this.newslettersSubscriptionEmail = '';
          this.newslettersSubscriptionSubmitted = true;
          this.newslettersSubscriptionFailure = true;

          this.globalMessageService.handle({
            message: 'Something went wrong. Please, try again.',
            isError: true
          });
        }
      });
  }

  footerLinksListLeft: Array<LinksListInterface> = [
    {
      link: 'blog',
      value: 'Blog'
    },
    {
      link: 'about',
      value: 'About'
    },
    {
      link: 'contact',
      value: 'Contact'
    }
  ];

  footerLinksListRight: Array<LinksListInterface> = [
    {
      link: 'policies/privacy-policy',
      value: 'Privacy Policy'
    },
    {
      link: 'policies/terms-and-conditions',
      value: 'Terms & Conditions'
    }
  ];
}
