import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewslettersService } from '@shared/services/newsletters.service';

@Component({
  selector: 'page-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrl: './newsletters.component.scss'
})
export class NewslettersComponent implements OnInit {
  action: string;
  newslettersId: string;
  confirmationNewslettersError: boolean;
  unsubscriptionNewslettersError: boolean;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly newslettersService: NewslettersService
  ) {}

  confirmNewslettersSubscription() {
    this.newslettersService
      .confirmNewslettersSubscription(this.newslettersId)
      .subscribe({
        error: () => (this.confirmationNewslettersError = true)
      });
  }

  unsubscribeFromNewsletters() {
    this.newslettersService
      .unsubscribeFromNewsletters(this.newslettersId)
      .subscribe({
        error: () => (this.unsubscriptionNewslettersError = true)
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      const action = params.get('action') as string;
      const newslettersId = params.get('newslettersId') as string;

      this.action = action;
      this.newslettersId = newslettersId;

      if (!action || !newslettersId) return await this.handleRedirect('/');

      if (
        this.action &&
        this.action !== 'subscribe' &&
        this.action !== 'unsubscribe'
      )
        return await this.handleRedirect('/');

      if (this.action === 'subscribe')
        return this.confirmNewslettersSubscription();
      else if (this.action === 'unsubscribe')
        return this.unsubscribeFromNewsletters();
    });
  }

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }
}
