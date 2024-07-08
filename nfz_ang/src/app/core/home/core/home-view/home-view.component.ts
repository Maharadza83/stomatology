import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DoctorsCarouselComponent } from '../../components/doctors-carousel/doctors-carousel.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    DoctorsCarouselComponent,
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeViewComponent {

}
