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

@Component({
  selector: 'page02',
  templateUrl: './page02.component.html',
    providers: [CVService, BS_CV_H, BS_CV_M, BS_WW_H, BS_WW_M, T_CV_H, T_CV_M, T_WW_H, T_WW_M,
        Setup1, Setup2, Setup1Box, Setup2Box,
        SetupBS_CV, SetupBS_WW, SetupT_CV, SetupT_WW]
})

export class Page02Component implements OnInit {

    switchTable: DoubleSwitchComponent[];
    numberTable: NumberBoxComponent[];

    public autoCorrect: boolean = true;
    public CVSetupTemp1_min: number = -1;
    public CVSetupTemp1_max: number = 70;


    constructor(private cvService: CVService,
        private setup1: Setup1,

        private setupBS_CV: SetupBS_CV,
        private setupBS_WW: SetupBS_WW,
        private setupT_CV: SetupT_CV,
        private setupT_WW: SetupT_WW,

        private setup1Box: Setup1Box,
        private setup2Box: Setup2Box    )

    {
        this.switchTable = new Array<DoubleSwitchComponent>();
        this.numberTable = new Array<NumberBoxComponent>();
    }


 


    getCV(): void {

        this.switchTable.push(this.setupBS_CV);
        this.switchTable.push(this.setupBS_WW);
        this.switchTable.push(this.setupT_CV);
        this.switchTable.push(this.setupT_WW);

        this.numberTable.push(this.setup1Box);
        this.numberTable.push(this.setup2Box);
    }
    
    ngOnInit(): void {
        this.getCV();
    }
}










