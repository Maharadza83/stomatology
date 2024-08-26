import { Routes } from '@angular/router';
import { ShellComponent } from '@NFZ/shell/shell.component';


export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [

      {
        path: '',
        loadChildren: () => import('@NFZ/core/home/home-routes'),
      },

      {
        path: 'about',
        loadChildren: () => import('@NFZ/core/about/about-routes'),
      },

      {
        path: 'contact',
        loadChildren: () => import('@NFZ/core/contact/contact-routes'),
      },

      {
        path: 'faq',
        loadChildren: () => import('@NFZ/core/faq/faq-routes'),
      },

      {
        path: 'services',
        loadChildren: () => import('@NFZ/core/dental-services/dental-services-routes'),
      },

      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },

    ],
  },
];
