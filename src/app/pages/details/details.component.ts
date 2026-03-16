import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  details: any;
  offerId?: any;
  status: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.status = this.route.snapshot.routeConfig?.path?.split('/:')[0];

    if (id) {
      this.offerId = +id;

      if (this.status === 'service') {
        this.details = this.dataService.getServiceById(this.offerId);
      } else if (this.status === 'destination') {
        this.details = this.dataService.getDestinationById(this.offerId);
      }
    }
  }
}
