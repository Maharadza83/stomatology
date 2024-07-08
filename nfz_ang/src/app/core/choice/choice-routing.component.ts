import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-choice-routing',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './choice-routing.component.html',
  styleUrl: './choice-routing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChoiceRoutingComponent {

}
