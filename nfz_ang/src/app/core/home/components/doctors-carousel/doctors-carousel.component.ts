import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsCarouselComponent } from 'doctors-carousel/doctors-carousel.component';

@NgModule({
  declarations: [
    DoctorsCarouselComponent,
    // Other declarations if any
  ],
  imports: [
    CommonModule,
    // Other imported modules if any
  ],
  exports: [
    DoctorsCarouselComponent,
    // If you want to export it for use in other modules
  ],
})
export class DoctorsModule {
}
