import { Route } from '@angular/router';
import { AboutRoutingComponent } from '@NFZ/core/about/about-routing.component';
import { AboutViewComponent } from '@NFZ/core/about/core/about-view/about-view.component';


export default [
  {
    path: '',
    component: AboutRoutingComponent,
    children: [
      {
        path: '',
        component: AboutViewComponent,
      },
    ],
  },
] satisfies Route[];
