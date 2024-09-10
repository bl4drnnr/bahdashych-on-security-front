import { Component, Input } from '@angular/core';
import { LinksListInterface } from '@interfaces/links-list.interface';
import { NewslettersService } from '@shared/services/newsletters.service';

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

  constructor(private readonly newslettersService: NewslettersService) {}

  submitSubscriptionToNewsletters() {
    this.newslettersService
      .subscribeToNewsletters(this.newslettersSubscriptionEmail)
      .subscribe({
        next: () => {
          this.newslettersSubscriptionEmail = '';
          this.newslettersSubscriptionSubmitted = true;
          this.newslettersSubscriptionSuccess = true;
        },
        error: () => (this.newslettersSubscriptionFailure = false)
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
