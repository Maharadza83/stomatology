import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-routing',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './about-routing.component.html',
  styleUrl: './about-routing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutRoutingComponent {

}
