import { Component, Input } from '@angular/core';
import { SocialLinkInterface } from '@interfaces/social-link.interface';

@Component({
  selector: 'component-about-team-cell',
  templateUrl: './about-team-cell.component.html',
  styleUrls: [
    './about-team-cell.component.scss',
    '../shared/about.component.scss'
  ]
})
export class AboutTeamCellComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() socialLinks: Array<SocialLinkInterface>;
}
