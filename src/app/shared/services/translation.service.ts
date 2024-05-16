import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  constructor(private readonly titleService: Title) {}

  // title: Titles
  // setPageTitle(title: string, params?: { [key: string]: string | number }) {
  //   const pageTitle = this.translocoService.selectTranslate(
  //     title,
  //     params,
  //     PageTranslation.TITLES
  //   );
  //
  //   pageTitle.subscribe({
  //     next: (title) => this.titleService.setTitle(title)
  //   });
  //
  //   this.titleService.setTitle(title);
  // }
}
