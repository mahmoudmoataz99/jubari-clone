import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { ServicesComponent } from './pages/services/services.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { OffersComponent } from './pages/offers/offers.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'services',component:ServicesComponent},
    {path:'destinations',component:DestinationsComponent},
    {path:'contact',component:ContactsComponent},
    {path:'offers',component:OffersComponent},
    {path:'offer/:id',component:DetailsComponent},
    {path:'destination/:id',component:DetailsComponent},
    {path:'service/:id',component:DetailsComponent},
    {path:'**',component:ErrorComponent}
];
