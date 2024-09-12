import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutTeamCellInterface } from '@interfaces/about-team-cell.interface';
import { EnvService } from '@shared/env.service';
import { AboutExperienceCellInterface } from '@interfaces/about-experience-cell.interface';

@Component({
  selector: 'page-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(
    private readonly router: Router,
    private readonly envService: EnvService
  ) {}

  staticStorage = this.envService.getStaticStorageLink;

  aboutTeamCells: Array<AboutTeamCellInterface> = [
    {
      title: 'Mikhail Bahdashych',
      subtitle: 'Chief Author',
      description:
        'Poland-based ex full-stack financial technologies/crypto web developer. Currently doing cybersecurity. Holding the bachelor degree in Software Engineering at UITM (University of Information Technology and Management) in Rzeszow, Poland. Improving skills at not only web development, but mostly at cybersecurity along with Artificial Intelligence and Machine Learning.',
      image: this.staticStorage + '/icons/default-ava.png',
      socialLinks: [
        {
          link: 'https://www.linkedin.com/in/mikhail-bahdashych/',
          title: 'LI.'
        },
        {
          link: 'https://stackoverflow.com/users/16732680/dokichan',
          title: 'SO.'
        }
      ]
    }
  ];
  aboutExperienceCells: Array<AboutExperienceCellInterface> = [
    {
      companyName: 'Cryptovoucher / P100',
      companyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque harum itaque magni natus obcaecati odio quae rem! Amet beatae dolorum enim et in magnam molestias natus possimus recusandae tempore.',
      companyLink: 'https://cryptovoucher.io',
      companyLinkTitle: 'Cryptovoucher Official Website',
      companyPicture: 'cv.jpeg',
      startDate: new Date(),
      endDate: new Date(),
      companyPositions: [
        {
          positionTitle: 'Full-Stack Web Developer',
          positionDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque harum itaque magni natus obcaecati odio quae rem! Amet beatae dolorum enim et in magnam molestias natus possimus recusandae tempore.',
          positionStartDate: new Date(),
          positionEndDate: new Date()
        }
      ]
    },
    {
      companyName: 'Cryptovoucher / P100',
      companyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque harum itaque magni natus obcaecati odio quae rem! Amet beatae dolorum enim et in magnam molestias natus possimus recusandae tempore.',
      companyLink: 'https://cryptovoucher.io',
      companyLinkTitle: 'Cryptovoucher Official Website',
      companyPicture: 'cv.jpeg',
      startDate: new Date(),
      endDate: new Date(),
      companyPositions: [
        {
          positionTitle: 'Full-Stack Web Developer',
          positionDescription:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque harum itaque magni natus obcaecati odio quae rem! Amet beatae dolorum enim et in magnam molestias natus possimus recusandae tempore.',
          positionStartDate: new Date(),
          positionEndDate: new Date()
        }
      ]
    }
  ];

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }
}
