import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';

import { OnInit } from '@angular/core';

import { ExportParameter } from '../exportparameter';
import { ParameterDisplayComponent} from '../parameter-display/parameter-display.component';
import { ExportParameterService } from '../export-parameter.service';
import { HttpClient } from '@angular/common/http/src/client';

@Component({
    selector: 'page01',
    templateUrl: './page01.component.html',
    providers: [ExportParameterService]
})

export class Page01Component implements OnInit {

    private test = true;

    temperatureList: ExportParameter[];
    pumpList: ExportParameter[];
    regimeList: ExportParameter[];


    constructor(private exportParameterService: ExportParameterService) {}

    

    ngOnInit(): void {

        this.temperatureList = [
        ExportParameter.temp1(),
        ExportParameter.temp2(),
        ExportParameter.temp3(),
        ExportParameter.temp3(),
        ExportParameter.tempBuffer(),
        ExportParameter.tempBoilerBS(),
        ExportParameter.tempBoilerT(),
        ExportParameter.setup1(),
        ExportParameter.setup2()
        ];
        this.temperatureList.forEach(xp => xp.link(this.exportParameterService));


        this.pumpList = [
        ExportParameter.pump1(),
        ExportParameter.pump2(),
        ExportParameter.pump3(),
        ExportParameter.pump4(),
        ExportParameter.pumpMain()
        ];
        this.pumpList.forEach(xp => xp.link(this.exportParameterService));


        this.regimeList = [
        ExportParameter.oilHeating(),
        ExportParameter.oilSelected(),
        ExportParameter.woodHeating(),
        ExportParameter.woodSelected()
        ];
        this.regimeList.forEach(xp => xp.link(this.exportParameterService));


    }

    

 
}




