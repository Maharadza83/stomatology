import { ChangeDetectionStrategy, Component, computed, signal, Signal, WritableSignal } from '@angular/core';
import { DoctorCardComponent } from '@NFZ/ui/doctor-card/doctor-card.component';
import { IDoctor } from '@NFZ/models/i-doctor';
import { DOCTORS_CAROUSEL_ANIMATION } from './components/doctors-carousel.animate';
import { DOCTORS } from '../../../../const/doctors.const';

@Component({
  selector: 'app-doctors-carousel',
  standalone: true,
  imports: [
    DoctorCardComponent,
  ],
  templateUrl: './doctors-carousel.component.html',
  styleUrl: './doctors-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ DOCTORS_CAROUSEL_ANIMATION ],
})
export class DoctorsCarouselComponent {
  public doctors: IDoctor[] = DOCTORS

  public readonly displayedDoctors: Signal<IDoctor[]> = computed(() => {
    const start = this.currentPage() * this.pageSize();
    const end = start + this.pageSize();
    return this.doctors.slice(start, end);
  });

  public readonly currentPage: WritableSignal<number> = signal(0);
  public readonly pageSize: Signal<number> = signal(3);

  public nextPage(): void {
    if ((this.currentPage() + 1) * this.pageSize() < this.doctors.length) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  public previousPage(): void {
    if (this.currentPage() > 0) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }
}

