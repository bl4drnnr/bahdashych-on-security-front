import dayjs from 'dayjs';
import { Component, Input } from '@angular/core';
import { AboutCertsInterface } from '@interfaces/about-certs.interface';
import { EnvService } from '@shared/env.service';

@Component({
  selector: 'component-about-certs-cell',
  templateUrl: './about-certs-cell.component.html',
  styleUrls: [
    './about-certs-cell.component.scss',
    '../shared/about.component.scss'
  ]
})
export class AboutCertsCellComponent {
  @Input() certs: Array<AboutCertsInterface>;

  constructor(private readonly envService: EnvService) {}

  certsDocsStaticStorageLink: string = `${this.envService.getStaticStorageLink}/certs/docs/`;
  certsPicsStaticStorageLink: string = `${this.envService.getStaticStorageLink}/certs/pics/`;

  downloadCert(certLink: string) {
    window.open(this.certsDocsStaticStorageLink + certLink, '_blank');
  }

  protected readonly dayjs = dayjs;
}
