import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { RoomTempService } from '../roomTemp.service';
import { HttpModule } from '@angular/http';

import { ExportParameter } from '../exportparameter';
import { ParameterDisplayComponent} from '../parameter-display/parameter-display.component';
import { ExportParameterService } from '../export-parameter.service';

@Component({
    selector: 'page15',
    templateUrl: './page15.component.html',
    providers: [ExportParameterService]
  })

  export class Page15Component {

    tempList: ExportParameter[];
    setupList: ExportParameter[];


    temp1: any = 10;
    temp2: any = 10;
    temp3: any = 0;

    T1_H_Max: any;
    T1_H_Min: any;
    T1_M_Max: any;
    T1_M_Min: any;

    public pointers1: any[];
    public pointers2: any[];
    public pointers3: any[];

    public errorMessage: string;

    constructor(private roomTempService: RoomTempService, private exportParameterService: ExportParameterService) 
    {

      this.tempList = [
        ExportParameter.RoomTemp_T1(),
      ];
      this.tempList[0].minValue = 10;
      this.tempList[0].maxValue = 25;
      this.tempList[0].minorUnit = 0.5;
      this.tempList[0].majorUnit = 5;

      this.tempList.forEach(xp => xp.link(this.exportParameterService));

      this.setupList = [
        ExportParameter.Setup_T1_H_min(false),
        ExportParameter.Setup_T1_H_max(false),
        ExportParameter.Setup_T1_M_min(false),
        ExportParameter.Setup_T1_M_max(false),
      ];
      this.setupList.forEach(xp => xp.link(this.exportParameterService));

      
      //setup Gauges
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

      this.pointers3 = 
      [{
        value: 0,
        color: '#ff0000'
        }, {
        value: 0,
        color: '#d6d6c2'
        }, {
        value: 0,
        color: '#d6d6c2'
          }];

      //Services for Gauges  
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

      this.roomTempService.getTempOutdoor().subscribe(result => 
        {
        this.temp3 = result.temp;
        this.pointers3[0].value = result.temp;
        this.pointers3[1].value = result.temp_min;
        this.pointers3[2].value = result.temp_max;
        });


      //Services for numeric boxes
      this.roomTempService.getTemp1_H_Max_Setting().subscribe(result => this.T1_H_Max = result);
      this.roomTempService.getTemp1_H_Min_Setting().subscribe(result => this.T1_H_Min = result);
      this.roomTempService.getTemp1_M_Max_Setting().subscribe(result => this.T1_M_Max = result);
      this.roomTempService.getTemp1_M_Min_Setting().subscribe(result => this.T1_M_Min = result);

           

     }

    changeTemp1_H_max(){this.roomTempService.setTemp1_H_Max_Setting(this.T1_H_Max);}
    changeTemp1_H_min(){this.roomTempService.setTemp1_H_Min_Setting(this.T1_H_Min);}
    changeTemp1_M_max(){this.roomTempService.setTemp1_M_Max_Setting(this.T1_M_Max);}
    changeTemp1_M_min(){this.roomTempService.setTemp1_M_Min_Setting(this.T1_M_Min);}

   


  }