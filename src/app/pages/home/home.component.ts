import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { HomeSliderComponent } from '../../components/home-slider/home-slider.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,HomeSliderComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  places = [
    {
      title: 'جزيرة سقطرى',
      imageUrl: 'https://jubari.net/media/223/socotra-testata-pozzi-1.jpg',
      link: 'https://jubari.net/ar/services/2'
    },
    {
      title: 'دبى',
      imageUrl: 'https://jubari.net/media/30/Frame-134032.jpg',
      link: 'https://jubari.net/ar/services/2'
    },
    {
      title: 'ماليزيا',
      imageUrl: 'https://jubari.net/media/31/Frame-134033.jpg',
      link: 'https://jubari.net/ar/services/2'
    },
    {
      title: 'شرم الشيخ',
      imageUrl: 'https://jubari.net/media/31/Frame-134033.jpg',
      link: 'https://jubari.net/ar/services/2'
    }
  ];
}
