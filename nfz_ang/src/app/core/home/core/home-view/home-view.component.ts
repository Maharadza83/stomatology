import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DoctorsCarouselComponent } from '../../components/doctors-carousel/doctors-carousel.component';
import { FormsModule } from '@angular/forms';
import { ImagesComparisonComponent } from './components/images-comparison/images-comparison.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    DoctorsCarouselComponent,
    FormsModule,
    ImagesComparisonComponent,
    RouterLink,
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeViewComponent {
  public range: number = 50;
}
