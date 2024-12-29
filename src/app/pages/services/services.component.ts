import { Component } from '@angular/core';
import { ItemComponent } from '../../components/item/item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ItemComponent,RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  appItems = [
    { id:1, title: 'حجز الفنادق', imageUrl: 'https://jubari.net/media/886/oswald-elsaboath-7EDZ1fxhgJQ-unsplash-(1).jpg', link: 'https://jubari.net/ar/services/2' },
    { id:2, title: 'النقل البرى', imageUrl: 'https://jubari.net/media/864/jonathan-borba-T5jzpRTVF1U-unsplash.jpg', link: 'https://jubari.net/ar/services/3' },
    { id:3, title: 'تأجير السيارات', imageUrl: 'https://jubari.net/media/872/tim-depickere-5mp2mlab7ZM-unsplash.jpg', link: 'https://jubari.net/ar/services/4' },
    { id:4, title: 'تأمين السفر', imageUrl: 'https://jubari.net/media/870/jeshoots-com-mSESwdMZr-A-unsplash.jpg', link: 'https://jubari.net/ar/services/14' },
  ];
}
