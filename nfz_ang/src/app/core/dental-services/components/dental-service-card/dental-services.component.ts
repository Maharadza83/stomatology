import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { IGroupedServices } from '@NFZ/models/i-service';
import { DentalServicesViewComponent } from './components/dental-service-card-info/dental-service-card.component';
import { DoctorCardComponent } from '@NFZ/ui/doctor-card/doctor-card.component';
import { DentalServicesService } from '@NFZ/services/dental-services.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dental-services',
  standalone: true,
  imports: [
    CommonModule,
    DentalServicesViewComponent,
    DoctorCardComponent,
    KeyValuePipe,
  ],
  templateUrl: './dental-services.component.html',
  styleUrls: [ './dental-services.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DentalServicesComponent {
  private readonly dentalServicesService: DentalServicesService = inject(DentalServicesService);
  public readonly dentalServices: Signal<IGroupedServices[]> = toSignal(this.dentalServicesService.getDentalServices());

}
