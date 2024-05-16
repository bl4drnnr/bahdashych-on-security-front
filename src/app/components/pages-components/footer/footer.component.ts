import { Component, Input } from '@angular/core';
import { LinksListInterface } from '@interfaces/links-list.interface';

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
      link: 'policies/privacy-policy',
      value: 'Privacy Policy'
    },
    {
      link: 'policies/terms-and-conditions',
      value: 'Terms & Conditions'
    }
  ];
}
