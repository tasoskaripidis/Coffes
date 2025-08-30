import { Routes } from '@angular/router';
import { EntranceComponent } from './components/entrance/entrance.component';
import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'entrance',
    component: EntranceComponent,
  },

  { path: 'main', component: MainComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: 'details', component: DetailsComponent },
];
