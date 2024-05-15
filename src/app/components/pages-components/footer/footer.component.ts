import { Component, Input } from '@angular/core';
import { LinksListInterface } from '@interfaces/links-list.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'component-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() showNewsletter: boolean;

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
      link: 'privacy-policy',
      value: 'Privacy Policy'
    },
    {
      link: 'tac',
      value: 'Terms & Conditions'
    },
    {
      link: 'licensing',
      value: 'Licensing'
    }
  ];

  constructor(private readonly router: Router) {}

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }
}
