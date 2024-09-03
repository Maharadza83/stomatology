import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaqOpenedQuestionsService } from '../../services/faq-opened-questions.service';
import { FaqQuestionComponent } from '../../components/faq-question/faq-question.component';

export interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq-view.component.html',
  styleUrls: [ './faq-view.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    FaqQuestionComponent,
  ],
  providers: [
    FaqOpenedQuestionsService,
  ],
})

export class FaqViewComponent {
  public readonly faqs: Faq[] = [
    {
      question: 'What do we do?',
      answer: 'We provide a secure, cloud-based customer management platform with powerful analytics and integrations. Our intuitive interface makes it easy to customize and automate customer workflows and manage customers.',
    },
    {
      question: 'Getting started with Untitled',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Installing Untitled',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'The messenger',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      question: 'Our next-gen inbox',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
}
