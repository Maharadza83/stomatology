import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { IService } from '@NFZ/models/i-service';

@Component({
  selector: 'app-dental-service-card',
  standalone: true,
  imports: [],
  templateUrl: './dental-service-card.component.html',
  styleUrl: './dental-service-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DentalServicesViewComponent {
  public service: InputSignal<IService> = input();
}

  