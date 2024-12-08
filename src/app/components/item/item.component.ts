import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() title?: string;
  @Input() imageUrl?: string;
  @Input() link?: string;
}
