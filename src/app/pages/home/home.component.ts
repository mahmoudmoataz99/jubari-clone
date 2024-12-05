import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { HomeSliderComponent } from '../../components/home-slider/home-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,HomeSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
