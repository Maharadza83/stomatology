import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@NFZ/app.config';
import { AppComponent } from '@NFZ/app.component';
import { register as registerSwiperElements } from 'swiper/element/bundle';


import 'img-comparison-slider';

registerSwiperElements();
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
