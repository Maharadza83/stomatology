import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DoctorsCarouselComponent } from '../../../home/components/doctors-carousel/doctors-carousel.component';
import {DOCTORS} from "@NFZ/const/doctors.const";
import { DoctorCardComponent } from '@NFZ/ui/doctor-card/doctor-card.component';

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [
    DoctorsCarouselComponent,
    DoctorCardComponent,
  ],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutViewComponent {

    protected readonly DOCTORS = DOCTORS;
}
