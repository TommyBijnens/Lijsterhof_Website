import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { AppComponent } from './app.component';
import { WelcomeComponent} from './Views/welcome.component';
import { Page01Component} from './Views/page01.component';
import { Page02Component} from './Views/page02.component';
import { Page03Component} from './Views/page03.component';
import { Page04Component} from './Views/page04.component';
import { Page05Component} from './Views/page05.component';
import { Page06Component} from './Views/page06.component';
import { Page07Component} from './Views/page07.component';
import { Page08Component} from './Views/page08.component';
import { Page09Component} from './Views/page09.component';
import { Page10Component} from './Views/page10.component';
import { Page11Component} from './Views/page11.component';
import { Page12Component} from './Views/page12.component';
import { Page13Component} from './Views/page13.component';
import { Page14Component} from './Views/page14.component';
import { Page13bComponent} from './Views/page13b.component';
import { Page14bComponent} from './Views/page14b.component';
import { Page14cComponent} from './Views/page14c.component';
import { Page15Component} from './Views/page15.component';
import { Page15bComponent} from './Views/page15b.component';

import { ConfigurationService } from './config';

import { RoomTempService } from './roomTemp.service';


import { AppRoutingModule } from './/app-routing.module';


// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GaugesModule } from '@progress/kendo-angular-gauges';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent, 
    WelcomeComponent,
    Page01Component, 
    Page02Component,
    Page03Component,
    Page04Component,
    Page05Component,
    Page06Component,
    Page07Component,
    Page08Component,
    Page09Component,
    Page10Component,
    Page11Component,
    Page12Component,
    Page13Component,
    Page13bComponent,
    Page14Component,
    Page14bComponent,
    Page14cComponent,
    Page15Component,
    Page15bComponent,

  ],
  imports: [
    BrowserModule, SlideMenuModule, AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
    ChartsModule, 
    GaugesModule
  ],
  providers: [ConfigurationService, RoomTempService],
  bootstrap: [AppComponent]
})
export class AppModule { }
