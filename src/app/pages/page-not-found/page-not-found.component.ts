import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent {
  constructor(private readonly router: Router) {}

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }
}
