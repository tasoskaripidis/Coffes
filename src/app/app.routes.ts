import { Routes } from '@angular/router';
import { EntranceComponent } from './components/entrance/entrance.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: EntranceComponent,
  },

  { path: 'main', component: MainComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'details', component: DetailsComponent },
];
