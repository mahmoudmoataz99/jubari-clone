import { Component } from '@angular/core';
import { ItemComponent } from '../../components/item/item.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
