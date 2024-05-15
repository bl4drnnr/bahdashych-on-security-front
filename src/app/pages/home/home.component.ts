import { Component } from '@angular/core';
import { LinksListInterface } from '@interfaces/links-list.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  categoriesList: Array<LinksListInterface> = [
    {
      link: 'implementation',
      value: 'Implementation'
    },
    {
      link: 'security',
      value: 'Security'
    },
    {
      link: 'trends',
      value: 'Trends'
    }
  ];

  favoritePosts = [];

  constructor(private readonly router: Router) {}

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }
}
