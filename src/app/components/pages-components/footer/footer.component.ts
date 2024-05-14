import { Component } from '@angular/core';
import { LinksListInterface } from '@interfaces/links-list.interface';

@Component({
  selector: 'component-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
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
}
