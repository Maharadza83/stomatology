import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { IDoctor } from '@NFZ/models/i-doctor';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorCardComponent {
  public doctor: InputSignal<IDoctor> = input();
}
