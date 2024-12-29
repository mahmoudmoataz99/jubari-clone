import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  offer: any;
  offerId?:any;
  status:any;

  constructor(private route: ActivatedRoute, private router:Router , private location: Location) {
    const currentUrl = this.router.url;

    const match = currentUrl.match(/\/([a-zA-Z]+)\/\d+$/);
    if (match) {
      const word = match[1];
      this.status = word; 
    } 
  }

  ngOnInit(): void {
    this.offerId = this.route.snapshot.paramMap.get('id');
  }
}
