import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { IDoctor } from '@NFZ/models/i-doctor';

@Component({
  selector: 'app-doctors-carousel',
  standalone: true,
  imports: [    DoctorCardComponent,
  ],
  templateUrl: './doctors-carousel.component.html',
  styleUrl: './doctors-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorsCarouselComponent {
  public readonly doctors: IDoctor[] = [
    {
      name: 'Richard Muldoon',
      title: 'Practical Nurse',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/doktorek.jpg',
    },
    {
      name: 'Michael Brian',
      title: 'Patient Services Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/doktorek.jpg',
    },
    {
      name: 'Maria Andaloro',
      title: 'Dental Hygienist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/doktorek.jpg',
    },
    {
      name: 'Martha Schmidt',
      title: 'Dentist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/doktorek.jpg',
    },
    {
      name: 'John Doe',
      title: 'Cardiologist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/doktorek.jpg',
    },
    {
      name: 'Jane Smith',
      title: 'Neurologist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/doktorek.jpg',
    },
  ];
}

