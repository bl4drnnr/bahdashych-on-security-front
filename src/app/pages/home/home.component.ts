import { Component } from '@angular/core';
import { LinksListInterface } from '@interfaces/links-list.interface';

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
}
