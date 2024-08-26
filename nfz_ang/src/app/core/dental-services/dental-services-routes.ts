import { Route } from '@angular/router';
import { DentalServicesRoutingComponent } from './dental-services-routing.component';
import { DentalServicesViewComponent } from './core/dental-services-view/dental-services-view.component';


export default [
  {
    path: '',
    component: DentalServicesRoutingComponent,
    children: [
      {
        path: '',
        component: DentalServicesViewComponent,
      },
    ],
  },
] satisfies Route[];
