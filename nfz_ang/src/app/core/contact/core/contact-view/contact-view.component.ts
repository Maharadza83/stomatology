import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-contact-view',
  standalone: true,
  imports: [],
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactViewComponent {

}
