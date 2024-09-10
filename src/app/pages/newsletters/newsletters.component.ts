import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrl: './newsletters.component.scss'
})
export class NewslettersComponent implements OnInit {
  action: string;
  newslettersId: string;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }

  confirmNewslettersSubscription() {}

  unsubscribeFromNewsletters() {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      const action = params.get('action');
      const newslettersId = params.get('newslettersId');

      if (
        !action ||
        !newslettersId ||
        (action &&
        action !== 'subscribe' ||
        action !== 'unsubscribe')
      ) return await this.handleRedirect('/');

      if (action === 'subscribe') {}
    })
  }
}
