import { Component } from '@angular/core';
import { EnvService } from '@shared/env.service';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'component-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(0, -100vh, 0)'
      })),
      transition('in => out', animate('400ms cubic-bezier(0.645, 0.045, 0.355, 1)')),
      transition('out => in', animate('400ms cubic-bezier(0.645, 0.045, 0.355, 1)'))
    ]),
    trigger('crossTransformFirst', [
      state('initial', style({
        transform: 'rotate(0deg)'
      })),
      state('cross', style({
        transform: 'rotate(45deg) translateY(5px)'
      })),
      transition('initial <=> cross', animate('400ms ease-in-out'))
    ]),
    trigger('crossTransformSecond', [
      state('initial', style({
        transform: 'rotate(0deg)'
      })),
      state('cross', style({
        transform: 'rotate(135deg) translateY(5px)'
      })),
      transition('initial <=> cross', animate('400ms ease-in-out'))
    ])
  ]
})
export class NavigationBarComponent {
  showNavigationBarMenu = false;
  hamburgerState = 'initial';

  constructor(
    private readonly router: Router,
    private readonly envService: EnvService
  ) {}

  searchIcon = `${this.envService.getStaticStorageLink}/icons/search.png`;

  toggleMenu() {
    this.showNavigationBarMenu = !this.showNavigationBarMenu;
    this.hamburgerState = this.hamburgerState === 'initial' ? 'cross' : 'initial';
  }

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }
}
