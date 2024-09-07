import { afterNextRender, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { NgStyle } from '@angular/common';
import { SwiperContainer } from 'swiper/swiper-element';

@Component({
  selector: 'app-about-images-slider',
  standalone: true,
  imports: [
    NgStyle,
  ],
  templateUrl: './about-images-slider.component.html',
  styleUrl: './about-images-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AboutImagesSliderComponent {
  private readonly swiper1 = viewChild.required<ElementRef<SwiperContainer>>('swiper1');
  private readonly swiper2 = viewChild.required<ElementRef<SwiperContainer>>('swiper2');


  constructor() {
    afterNextRender(() => {
      this.swiper1().nativeElement.initialize();
      this.swiper2().nativeElement.initialize();
    });
  }

  public readonly items = [
    { imgUrl: 'assets/  (1).jpg' },
    { imgUrl: 'assets/  (2).jpg' },
    { imgUrl: 'assets/  (3).jpg' },
    { imgUrl: 'assets/  (4).jpg' },
    { imgUrl: 'assets/  (5).jpg' },
    { imgUrl: 'assets/  (6).jpg' },
    { imgUrl: 'assets/  (7).jpg' },
    { imgUrl: 'assets/  (8).jpg' },
    { imgUrl: 'assets/  (9).jpg' },
    { imgUrl: 'assets/  (10).jpg' },
    { imgUrl: 'assets/  (11).jpg' },
    { imgUrl: 'assets/  (12).jpg' },
    { imgUrl: 'assets/  (13).jpg' },
    { imgUrl: 'assets/  (14).jpg' },
  ];
}
