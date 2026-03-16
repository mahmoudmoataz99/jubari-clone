import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [RouterLink, NgFor, NgStyle],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css',
})
export class HomeSliderComponent {
  cardsData = [
    {
      id: 1,
      title: 'الحج و العمرة',
      imageUrl: 'hajj.png',
    },
    {
      id: 2,
      title: 'إستخراج التأشيرة',
      imageUrl: 'tashera.jpg',
    },
    {
      id: 3,
      title: 'حجز تذاكر طيران',
      imageUrl: 'apticket.png',
    },
    {
      id: 4,
      title: 'تأجير سيارات',
      imageUrl: 'carbook.png',
    },
  ];
}
