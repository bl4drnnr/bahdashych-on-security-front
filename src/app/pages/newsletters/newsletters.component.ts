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

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly newslettersService: NewslettersService
  ) {}

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }

  confirmNewslettersSubscription() {
    this.newslettersService
      .confirmNewslettersSubscription(this.newslettersId)
      .subscribe({
        next: () => {},
        error: () => {}
      });
  }

  unsubscribeFromNewsletters() {
    this.newslettersService
      .unsubscribeFromNewsletters(this.newslettersId)
      .subscribe({
        next: () => {},
        error: () => {}
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      const action = params.get('action');
      const newslettersId = params.get('newslettersId');

      if (!action || !newslettersId) return await this.handleRedirect('/');

      if ((action && action !== 'subscribe') || action !== 'unsubscribe')
        return await this.handleRedirect('/');

      this.action = action;
      this.newslettersId = newslettersId;

      if (this.action === 'subscribe')
        return this.confirmNewslettersSubscription();
      else if (this.action === 'unsubscribe')
        return this.unsubscribeFromNewsletters();
    });
  }
}
