import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { OnInit } from '@angular/core';
//import { CV } from './cv';
import { CVService } from '../cv.service';
//import { Observable } from 'rxjs/Rx';
import { BS_CV_H, BS_CV_M, BS_WW_H, BS_WW_M } from '../url-library';
import { T_CV_H, T_CV_M, T_WW_H, T_WW_M } from '../url-library';
import { Setup1, Setup2 } from '../url-library';
import { NumberBoxComponent, Setup1Box, Setup2Box } from '.././UIComponents/NumberBoxComponent';
import { DoubleSwitchComponent, SetupBS_CV, SetupBS_WW, SetupT_CV, SetupT_WW } from '.././UIComponents/DoubleSwitchComponent';
import { Stooklijn } from '../stooklijn';

import { RoomTempService } from '../roomTemp.service';

import { ExportParameter } from '../exportparameter';
import { ParameterDisplayComponent} from '../parameter-display/parameter-display.component';

import { ExportParameterService } from '../export-parameter.service';


@Component({
  selector: 'page02',
  templateUrl: './page02.component.html',
    providers: [CVService, BS_CV_H, BS_CV_M, BS_WW_H, BS_WW_M, T_CV_H, T_CV_M, T_WW_H, T_WW_M,
        Setup1, Setup2, Setup1Box, Setup2Box,
        SetupBS_CV, SetupBS_WW, SetupT_CV, SetupT_WW, 
        ExportParameterService]
})

export class Page02Component implements OnInit {


    settingList: ExportParameter[];
    tempSettingList: ExportParameter[];

    switchTable: DoubleSwitchComponent[];
    numberTable: NumberBoxComponent[];

    public autoCorrect: boolean = true;
    public CVSetupTemp1_min: number = -1;
    public CVSetupTemp1_max: number = 70;

    public stookLijnen: Stooklijn[];


    

    constructor( private exportParameterService: ExportParameterService,
        private cvService: CVService,
        private setup1: Setup1,

        private setupBS_CV: SetupBS_CV,
        private setupBS_WW: SetupBS_WW,
        private setupT_CV: SetupT_CV,
        private setupT_WW: SetupT_WW,

        private setup1Box: Setup1Box,
        private setup2Box: Setup2Box ,
        private roomTempService: RoomTempService   )

    {
        this.switchTable = new Array<DoubleSwitchComponent>();
        this.numberTable = new Array<NumberBoxComponent>();
        this.stookLijnen = new Array<Stooklijn>()
        this.stookLijnen.push(new Stooklijn());

        
        // this.roomTempService.getWaterSettingX1().subscribe(result => this.stookLijnen[0].min.x = result);
        // this.roomTempService.getWaterSettingY1().subscribe(result => this.stookLijnen[0].min.y = result);
        // this.roomTempService.getWaterSettingX2().subscribe(result => this.stookLijnen[0].max.x = result);
        // this.roomTempService.getWaterSettingY2().subscribe(result => this.stookLijnen[0].max.y = result); 


        

        this.settingList = [
            ExportParameter.BS_CV_M(false),
            ExportParameter.BS_CV_H(false),
            ExportParameter.BS_WW_M(false),
            ExportParameter.BS_WW_H(false),
            ExportParameter.T_CV_M(false),
            ExportParameter.T_CV_H(false),
            ExportParameter.T_WW_M(false),
            ExportParameter.T_WW_H(false),
            ];
            this.settingList.forEach(xp => xp.link(this.exportParameterService));

        this.tempSettingList = [
            ExportParameter.TempWater_X1(false),
            ExportParameter.TempWater_Y1(false),
            ExportParameter.TempWater_X2(false),
            ExportParameter.TempWater_Y2(false),
            ];
            this.tempSettingList[0].link(this.exportParameterService, this.stookLijnen[0]);
            this.tempSettingList[1].link(this.exportParameterService, this.stookLijnen[0]);
            this.tempSettingList[2].link(this.exportParameterService, this.stookLijnen[0]);
            this.tempSettingList[3].link(this.exportParameterService, this.stookLijnen[0]);
            

            

    }


    changeSettingX1(){this.roomTempService.setWaterSettingX1(this.stookLijnen[0].min.x);}
    changeSettingY1(){this.roomTempService.setWaterSettingY1(this.stookLijnen[0].min.y);}
    changeSettingX2(){this.roomTempService.setWaterSettingX2(this.stookLijnen[0].max.x);}
    changeSettingY2(){this.roomTempService.setWaterSettingY2(this.stookLijnen[0].max.y);}


    getCV(): void {

        this.switchTable.push(this.setupBS_CV);
        this.switchTable.push(this.setupBS_WW);
        this.switchTable.push(this.setupT_CV);
        this.switchTable.push(this.setupT_WW);

     //   this.numberTable.push(this.setup1Box);
     //   this.numberTable.push(this.setup2Box);
    }
    
    ngOnInit(): void {
        this.getCV();
    }
}










