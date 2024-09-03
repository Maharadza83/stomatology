import { ChangeDetectionStrategy, Component, computed, inject, input, InputSignal, Signal } from '@angular/core';
import { FaqOpenedQuestionsService } from '../../services/faq-opened-questions.service';
import { Faq } from '../../core/faq-view/faq-view.component';

@Component({
  selector: 'app-faq-question',
  standalone: true,
  imports: [],
  templateUrl: './faq-question.component.html',
  styleUrl: './faq-question.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqQuestionComponent {
  public faq: InputSignal<Faq> = input();

  private readonly faqOpenedQuestionsService: FaqOpenedQuestionsService = inject(FaqOpenedQuestionsService);

  public readonly isOpened: Signal<boolean> = computed(() => this.faq().question === this.faqOpenedQuestionsService.openedQuestion())

  public openHandler(): void {
    if (this.isOpened()) {
      this.faqOpenedQuestionsService.openQuestion(null)
    } else {
      this.faqOpenedQuestionsService.openQuestion(this.faq().question)
    }
  }
}
