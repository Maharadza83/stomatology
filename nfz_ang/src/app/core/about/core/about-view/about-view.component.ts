import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DoctorsCarouselComponent } from '../../../home/components/doctors-carousel/doctors-carousel.component';

@Component({
  selector: 'app-about-view',
  standalone: true,
  imports: [
    DoctorsCarouselComponent,
  ],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutViewComponent {

}
