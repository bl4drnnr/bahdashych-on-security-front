import { Component, Input } from '@angular/core';

@Component({
  selector: 'basic-social-link',
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss'
})
export class SocialLinkComponent {
  @Input() link: string;
  @Input() title: string;
}
