import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const DOCTORS_CAROUSEL_ANIMATION = trigger('doctorsCarouselAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateX(100%)' }),
      stagger('100ms', [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ], { optional: true }),
    query(':leave', [
      stagger('100ms', [
        animate('500ms ease-out', style({ opacity: 0, transform: 'translateX(-100%)' })),
      ]),
    ], { optional: true }),
  ]),
]);