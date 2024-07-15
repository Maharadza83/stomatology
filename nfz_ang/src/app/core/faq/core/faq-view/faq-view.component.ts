import { Component } from '@angular/core';

interface Faq {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq-view.component.html',
  styleUrls: ['./faq-view.component.scss']
})

export class FaqViewComponent {
  public readonly faqs: Faq[] = [
    {
      question: 'What do we do?',
      answer: 'We provide a secure, cloud-based customer management platform with powerful analytics and integrations. Our intuitive interface makes it easy to customize and automate customer workflows and manage customers.',
      open: false
    },
    {
      question: 'Getting started with Untitled',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      open: false
    },
    {
      question: 'Installing Untitled',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      open: false
    },
    {
      question: 'The messenger',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      open: false
    },
    {
      question: 'Our next-gen inbox',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      open: false
    }
  ];

  toggleFaq(faq: Faq) {
    faq.open = !faq.open;
  }
}
