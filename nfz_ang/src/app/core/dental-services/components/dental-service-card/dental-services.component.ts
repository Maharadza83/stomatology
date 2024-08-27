import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IService } from '@NFZ/models/i-service';
import { DentalServicesViewComponent } from './components/dental-service-card-info/dental-service-card.component';
import { DoctorCardComponent } from '../../../home/components/doctors-carousel/components/doctor-card/doctor-card.component';

@Component({
  selector: 'app-dental-services',
  standalone: true,
  imports: [
    DentalServicesViewComponent,
    DoctorCardComponent,
  ],
  templateUrl: './dental-services.component.html',
  styleUrl: './dental-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DentalServicesComponent {
  public readonly services: IService[] = [
    {
      name: 'Chirurgia',
      description: 'Zabiegi chirurgiczne z najwyższą precyzją.',
      imageUrl: 'assets/z (6).jpg',
    },

    {
      name: 'Chirurgia',
      description: 'Zabiegi chirurgiczne z najwyższą precyzją.',
      imageUrl: 'assets/z (6).jpg',
    },

    {
      name: 'Chirurgia',
      description: 'Zabiegi chirurgiczne z najwyższą precyzją.',
      imageUrl: 'assets/z (6).jpg',
    },

    {
      name: 'Chirurgia',
      description: 'Zabiegi chirurgiczne z najwyższą precyzją.',
      imageUrl: 'assets/z (6).jpg',
    },

    {
      name: 'Chirurgia',
      description: 'Zabiegi chirurgiczne z najwyższą precyzją.',
      imageUrl: 'assets/z (6).jpg',
    },

    {
      name: 'Chirurgia',
      description: 'Zabiegi chirurgiczne z najwyższą precyzją.',
      imageUrl: 'assets/z (6).jpg',
    },
  ];
}



