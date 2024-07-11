import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDoctor } from '@NFZ/models/i-doctor';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: [ './doctor-card.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorCardComponent {
  @Input() doctor!: IDoctor;
}
