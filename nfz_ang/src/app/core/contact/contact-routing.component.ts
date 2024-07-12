import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-routing',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './contact-routing.component.html',
  styleUrl: './contact-routing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactRoutingComponent {

}
