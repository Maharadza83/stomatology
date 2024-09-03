import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DentalServicesService } from '@NFZ/services/dental-services.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-single-dental-service-view',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './single-dental-service-view.component.html',
  styleUrl: './single-dental-service-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleDentalServiceViewComponent {
  private readonly dentalServicesService: DentalServicesService = inject(DentalServicesService);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  public readonly dentalService = toSignal(this.dentalServicesService.getSingleDentalService(this.activatedRoute.snapshot.params['link']));
}