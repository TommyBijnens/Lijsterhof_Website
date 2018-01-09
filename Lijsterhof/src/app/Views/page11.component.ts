
import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { OnInit } from '@angular/core';
//import { CV } from './cv';
import { NHCService } from '../NHC.service';
//import { Observable } from 'rxjs/Rx';
//import { service } from '../serviceLibrary';
import { UIComponents as UI } from '../UIComponents';
import { NHCItem } from '../nhc.component';


@Component({
  selector: 'page11',
  templateUrl: './page10.component.html',
  providers: [NHCService]
})

export class Page11Component implements OnInit {
    nhcTable: UI.NHCZone;
    public autoCorrect: boolean = true;
    public minValue: number = 0;
    public maxValue: number = 100;
    public title: string = "Bruno & Sandy";
    public textboxStep: number = 25;


    constructor(private nhcService: NHCService) {

    }

    getNHC(): void
    {
        //this.tempTable.push(new UI.labelComponent(this.cvService, "Temperatuur 1", new service.Temp1));   
        this.nhcTable = new UI.NHCZone(this.nhcService, "test", 1);
    }

    ngOnInit(): void {
        this.getNHC();
    }

 
}




