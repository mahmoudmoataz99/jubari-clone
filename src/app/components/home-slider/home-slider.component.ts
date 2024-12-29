import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [RouterLink,NgFor,NgStyle],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css'
})
export class HomeSliderComponent {
  cardsData = [
    {
      id:1,
      title: "الحج و العمرة",
      imageUrl: "https://jubari.net/media/892/ishan-seefromthesky-66Tu10CxYY0-unsplash.jpg"
    },
    {
      id:2,
      title: "إستخراج التأشيرة",
      imageUrl: "https://jubari.net/media/884/convertkit-htQznS-Rx7w-unsplash.jpg"
    },
    {
      id:3,
      title: "حجز تذاكر طيران",
      imageUrl: "https://jubari.net/media/860/image-10.jpg"
    },
    {
      id:4,
      title: "تأجير سيارات",
      imageUrl: "https://jubari.net/media/872/tim-depickere-5mp2mlab7ZM-unsplash.jpg"
    }
  ];
}
