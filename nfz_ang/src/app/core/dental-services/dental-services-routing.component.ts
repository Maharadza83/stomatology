import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dental-services-routing',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './dental-services-routing.component.html',
  styleUrl: './dental-services-routing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DentalServicesRoutingComponent {

}
