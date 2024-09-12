import dayjs from 'dayjs';
import { Component, Input } from '@angular/core';
import { AboutExperienceCellInterface } from '@interfaces/about-experience-cell.interface';
import { EnvService } from '@shared/env.service';

@Component({
  selector: 'component-about-experience-cell',
  templateUrl: './about-experience-cell.component.html',
  styleUrls: [
    './about-experience-cell.component.scss',
    '../shared/about.component.scss'
  ]
})
export class AboutExperienceCellComponent {
  @Input() title: string;
  @Input() experiences: Array<AboutExperienceCellInterface>;

  constructor(private readonly envService: EnvService) {}

  careersStaticStorageLink: string = `${this.envService.getStaticStorageLink}/career/`;
  protected readonly dayjs = dayjs;
}
