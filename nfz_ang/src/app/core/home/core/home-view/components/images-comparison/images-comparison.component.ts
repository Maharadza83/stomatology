import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-images-comparison',
  standalone: true,
  imports: [],
  templateUrl: './images-comparison.component.html',
  styleUrl: './images-comparison.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ImagesComparisonComponent {
}
