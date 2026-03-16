import { Component } from '@angular/core';
import { ItemComponent } from '../../components/item/item.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [ItemComponent, NgFor, RouterLink],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  destinations = this.dataService.destinations;

  constructor(private dataService: DataService) {}
}
