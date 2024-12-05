import { Component, OnInit } from '@angular/core';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports:[RouterLink],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
