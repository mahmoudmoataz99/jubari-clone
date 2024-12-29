import { Component } from '@angular/core';
import { ItemComponent } from '../../components/item/item.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [ItemComponent,NgFor,RouterLink],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  destinations = [
    {
      id:1,
      title: 'جزيرة سقطرى',
      imageUrl: 'https://jubari.net/media/223/socotra-testata-pozzi-1.jpg',
      link: 'https://jubari.net/ar/offers?destination=2'
    },
    {
      id:2,
      title: 'دبي',
      imageUrl: 'https://jubari.net/media/30/Frame-134032.jpg',
      link: 'https://jubari.net/ar/offers?destination=3'
    },
    {
      id:3,
      title: 'شرم الشيخ',
      imageUrl: 'https://jubari.net/media/31/Frame-134033.jpg',
      link: 'https://jubari.net/ar/offers?destination=4'
    },
    {
      id:4,
      title: 'ماليزيا',
      imageUrl: 'https://jubari.net/media/32/download.jpg',
      link: 'https://jubari.net/ar/offers?destination=5'
    },
    {
      id:5,
      title: 'مكة المكرمة',
      imageUrl: 'https://jubari.net/media/585/1.jpg',
      link: 'https://jubari.net/ar/offers?destination=6'
    },
    {
      id:6,
      title: 'إندونيسيا',
      imageUrl: 'https://smitatravels.com/wp-content/uploads/2024/03/BALI.jpg',
      link: 'https://jubari.net/ar/offers?destination=7'
    }
  ];
}
