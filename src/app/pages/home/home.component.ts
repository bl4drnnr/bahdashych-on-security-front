import dayjs from 'dayjs';
import { Component } from '@angular/core';
import { LinksListInterface } from '@interfaces/links-list.interface';
import { Router } from '@angular/router';
import { FavoriteArticleInterface } from '@interfaces/favorite-article.interface';

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

  favoriteArticles: Array<FavoriteArticleInterface> = [
    {
      category: 'Security',
      categoryLink: 'security',
      image:
        'https://assets-global.website-files.com/64f8a5805a1caa95358b298b/64f8aab91657617febc2e016_image3.jpeg',
      date: new Date(),
      title: 'Digital Transformation Implementation: A Roadmap for Success',
      slug: 'digital-transformation-implementation-a-roadmap-for-success'
    },
    {
      category: 'Trends',
      categoryLink: 'trends',
      image:
        'https://assets-global.website-files.com/64f8a5805a1caa95358b298b/6533656d54614fc8ab8ffa62_jason-dent-3wPJxh-piRw-unsplash.jpg',
      date: new Date(),
      title: 'Emerging Trends in the IT Space: Navigating the Digital Future',
      slug: 'emerging-trends-in-the-it-space-navigating-the-digital-future'
    }
  ];

  constructor(private readonly router: Router) {}

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }

  protected readonly dayjs = dayjs;
}
