import { Component } from '@angular/core';
import { ItemComponent } from '../../components/item/item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [ItemComponent,NgFor],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  destinations = [
    {
      title: 'جزيرة سقطرى',
      imageUrl: 'https://jubari.net/media/223/socotra-testata-pozzi-1.jpg',
      link: 'https://jubari.net/ar/offers?destination=2'
    },
    {
      title: 'دبي',
      imageUrl: 'https://jubari.net/media/30/Frame-134032.jpg',
      link: 'https://jubari.net/ar/offers?destination=3'
    },
    {
      title: 'شرم الشيخ',
      imageUrl: 'https://jubari.net/media/31/Frame-134033.jpg',
      link: 'https://jubari.net/ar/offers?destination=4'
    },
    {
      title: 'ماليزيا',
      imageUrl: 'https://jubari.net/media/32/download.jpg',
      link: 'https://jubari.net/ar/offers?destination=5'
    },
    {
      title: 'مكة المكرمة',
      imageUrl: 'https://jubari.net/media/585/1.jpg',
      link: 'https://jubari.net/ar/offers?destination=6'
    },
    {
      title: 'إندونيسيا',
      imageUrl: 'https://smitatravels.com/wp-content/uploads/2024/03/BALI.jpg',
      link: 'https://jubari.net/ar/offers?destination=7'
    }
  ];
}
