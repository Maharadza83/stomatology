import { ChangeDetectionStrategy, Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { IDoctor } from '@NFZ/models/i-doctor';
import { DOCTORS_CAROUSEL_ANIMATION } from './components/doctors-carousel.animate';

@Component({
  selector: 'app-doctors-carousel',
  standalone: true,
  imports: [
    DoctorCardComponent,
  ],
  templateUrl: './doctors-carousel.component.html',
  styleUrl: './doctors-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ DOCTORS_CAROUSEL_ANIMATION ],
})
export class DoctorsCarouselComponent {
  public readonly displayedDoctors: Signal<IDoctor[]> = computed(() => {
    const start = this.currentPage() * this.pageSize();
    const end = start + this.pageSize();
    return this.doctors.slice(start, end);
  });

  public readonly currentPage: WritableSignal<number> = signal(0);
  public readonly pageSize: Signal<number> = signal(3);

  public nextPage(): void {
    if ((this.currentPage() + 1) * this.pageSize() < this.doctors.length) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  public previousPage(): void {
    if (this.currentPage() > 0) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }


  public readonly doctors: IDoctor[] = [
    {
      name: 'Richard Muldoon',
      title: 'Practical Nurse',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/z (1).jpg',
    },
    {
      name: 'Michael Brian',
      title: 'Patient Services Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/z (2).jpg',
    },
    {
      name: 'Maria Andaloro',
      title: 'Dental Hygienist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/z (3).jpg',
    },
    {
      name: 'Martha Schmidt',
      title: 'Dentist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/z (4).jpg',
    },
    {
      name: 'John Doe',
      title: 'Cardiologist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/z (5).jpg',
    },
    {
      name: 'Jane Smith',
      title: 'Neurologist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'assets/z (6).jpg',
    },
  ];
}

