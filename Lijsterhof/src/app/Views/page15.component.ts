import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { RoomTempService } from '../roomTemp.service';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'page15',
    templateUrl: './page15.component.html',
    providers: [HttpModule]
  })

  export class Page15Component {

    temp1: any
    constructor(private roomTempService: RoomTempService) 
    {

      this.roomTempService.getTemp1().subscribe(result => this.temp1 = result);
     }




  }