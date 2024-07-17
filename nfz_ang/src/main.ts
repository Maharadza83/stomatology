import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@NFZ/app.config';
import { AppComponent } from '@NFZ/app.component';

import 'img-comparison-slider';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
