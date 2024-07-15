import { Route } from '@angular/router';
import { FaqRoutingComponent } from '@NFZ/core/faq/faq-routing.component';
import { FaqViewComponent } from '@NFZ/core/faq/core/faq-view/faq-view.component';
    export default [
      {
        path: '',
        component: FaqRoutingComponent,
        children: [
          {
            path: '',
            component: FaqViewComponent,
          },
        ],
      },
    ] satisfies Route[];