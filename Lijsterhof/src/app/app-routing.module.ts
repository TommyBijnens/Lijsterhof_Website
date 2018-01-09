import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent }      from './Views/welcome.component';
import { Page01Component }      from './Views/page01.component';
import { Page02Component }      from './Views/page02.component';
import { Page03Component }      from './Views/page03.component';
import { Page04Component }      from './Views/page04.component';
import { Page05Component }      from './Views/page05.component';
import { Page06Component }      from './Views/page06.component';
import { Page07Component }      from './Views/page07.component';
import { Page08Component }      from './Views/page08.component';
import { Page09Component }      from './Views/page09.component';
import { Page10Component }      from './Views/page10.component';
import { Page11Component }      from './Views/page11.component';
import { Page12Component }      from './Views/page12.component';
import { Page13Component }      from './Views/page13.component';
import { Page14Component }      from './Views/page14.component';
import { Page15Component }      from './Views/page15.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'page01', component: Page01Component },
  { path: 'page02', component: Page02Component },
  { path: 'page03', component: Page03Component },
  { path: 'page04', component: Page04Component },
  { path: 'page05', component: Page05Component },
  { path: 'page06', component: Page06Component },
  { path: 'page07', component: Page07Component },
  { path: 'page08', component: Page08Component },
  { path: 'page09', component: Page09Component },
  { path: 'page10', component: Page10Component },
  { path: 'page11', component: Page11Component },
  { path: 'page12', component: Page12Component },
  { path: 'page13', component: Page13Component },
  { path: 'page14', component: Page14Component },
  { path: 'page15', component: Page15Component },
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }



