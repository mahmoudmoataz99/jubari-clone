import { Component } from '@angular/core';
import { ItemComponent } from '../../components/item/item.component';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ItemComponent, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  appItems = this.dataService.services;

  constructor(private dataService: DataService) {}
}
