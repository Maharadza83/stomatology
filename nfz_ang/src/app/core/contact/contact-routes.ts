import { Route } from '@angular/router';
import { ContactRoutingComponent } from '@NFZ/core/contact/contact-routing.component';
import { ContactViewComponent } from './core/contact-view/contact-view.component';


export default [
  {
    path: '',
    component: ContactRoutingComponent,
    children: [
      {
        path: '',
        component: ContactViewComponent,
      },
    ],
  },
] satisfies Route[];
