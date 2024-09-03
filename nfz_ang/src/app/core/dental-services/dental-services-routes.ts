import { Route } from '@angular/router';
import { DentalServicesRoutingComponent } from './dental-services-routing.component';
import { DentalServicesViewComponent } from './core/dental-services-view/dental-services-view.component';
import { SingleDentalServiceViewComponent } from './core/single-dental-service-view/single-dental-service-view.component';


export default [
  {
    path: '',
    component: DentalServicesRoutingComponent,
    children: [
      {
        path: '',
        component: DentalServicesViewComponent,
      },
      {
        path: ':link',
        component: SingleDentalServiceViewComponent,
      },
    ],
  },
] satisfies Route[];