import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutTeamInterface } from '@interfaces/about-team.interface';
import { EnvService } from '@shared/env.service';
import { AboutExperienceInterface } from '@interfaces/about-experience.interface';
import { AboutCertsInterface } from '@interfaces/about-certs.interface';

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

  aboutTeam: Array<AboutTeamInterface> = [
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
  aboutExperience: Array<AboutExperienceInterface> = [
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
  aboutCerts: Array<AboutCertsInterface> = [
    {
      certName: 'CCNA',
      certDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iste minus quis sit! Distinctio doloremque eveniet expedita facilis magnam, mollitia numquam voluptate. Adipisci beatae, fugit harum ipsam quam quod sit.',
      certPicture: 'ccna-logo.png',
      certDoc: 'Cisco Certified Network Associate certificate.pdf',
      obtainingDate: new Date(),
      expirationDate: new Date(),
      obtainedSkills: ['Networking', 'Security', 'Cisco']
    },
    {
      certName: 'CCNAv7: ENSA',
      certDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iste minus quis sit! Distinctio doloremque eveniet expedita facilis magnam, mollitia numquam voluptate. Adipisci beatae, fugit harum ipsam quam quod sit.',
      certPicture: 'ccna-logo.png',
      certDoc: 'MikhailBahdashych-ccnav7-ensa.pdf',
      obtainingDate: new Date(),
      expirationDate: new Date(),
      obtainedSkills: ['Networking', 'Security', 'Cisco']
    },
    {
      certName: 'CCNAv7: SRWE',
      certDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iste minus quis sit! Distinctio doloremque eveniet expedita facilis magnam, mollitia numquam voluptate. Adipisci beatae, fugit harum ipsam quam quod sit.',
      certPicture: 'ccna-logo.png',
      certDoc: 'MikhailBahdashych-ccnav7-srwe.pdf',
      obtainingDate: new Date(),
      expirationDate: new Date(),
      obtainedSkills: ['Networking', 'Security', 'Cisco']
    },
    {
      certName: 'CompTIA Security+',
      certDescription:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iste minus quis sit! Distinctio doloremque eveniet expedita facilis magnam, mollitia numquam voluptate. Adipisci beatae, fugit harum ipsam quam quod sit.',
      certPicture: 'comptia-securityplus-logo.png',
      certDoc: 'ccna.pdf',
      obtainingDate: new Date(),
      expirationDate: new Date(),
      obtainedSkills: ['Networking', 'Security', 'Cisco']
    }
  ];

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }
}
