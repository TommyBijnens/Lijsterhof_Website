import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { RoomTempService } from '../roomTemp.service';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'page15',
    templateUrl: './page15.component.html',
    providers: [HttpModule]
  })

  export class Page15Component {

    temp1: any = 10;
    temp2: any = 10;
 

    public pointers1: any[];
    public pointers2: any[];

    constructor(private roomTempService: RoomTempService) 
    {
      this.roomTempService.getTemp1().subscribe(result => 
        {
          this.temp1 = result;
          this.pointers1[0].value = result;
        })
      this.roomTempService.getTemp2().subscribe(result => 
        {
          this.temp2 = result;
        this.pointers2[0].value = result;
        });

      this.pointers1 = 
      [{
        value: 10,
        color: '#ff0000'
        }, {
        value: 21,
        color: '#d6d6c2'
        }, {
        value: 15,
        color: '#d6d6c2'
          }];

          this.pointers2 = 
          [{
            value: 10,
            color: '#ff0000'
            }, {
            value: 21,
            color: '#d6d6c2'
            }, {
            value: 15,
            color: '#d6d6c2'
              }];


     }


     


  }