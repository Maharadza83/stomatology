import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DoctorsCarouselComponent } from '../../../home/components/doctors-carousel/doctors-carousel.component';
import { DentalServicesComponent } from '../../components/dental-service-card/dental-services.component';

@Component({
  selector: 'app-dental-services-view',
  standalone: true,
  imports: [
    DoctorsCarouselComponent,
    DentalServicesComponent,
  ],
  templateUrl: './dental-services-view.component.html',
  styleUrl: './dental-services-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DentalServicesViewComponent {

}

