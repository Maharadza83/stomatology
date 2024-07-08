import { Route } from '@angular/router';
import { ChoiceRoutingComponent } from './choice-routing.component';
import { ChoiceViewComponent } from '@NFZ/core/choice/core/choice-view/choice-view.component';

export default [
  {
    path: '',
    component: ChoiceRoutingComponent,
    children: [
      {
        path: '',
        component: ChoiceViewComponent,
      },
    ],
  },
] satisfies Route[];
