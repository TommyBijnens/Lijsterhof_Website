import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';

import { OnInit } from '@angular/core';
import { CVService } from '../cv.service';
import { UIComponents as UI } from '../UIComponents';
import { LabelComponent, Temp1Label, Temp2Label, Temp3Label, TempBufferLabel, TempBoilerBSLabel, TempBoilerTLabel} from '.././UIComponents/LabelComponent';
import { PictureComponent, Pump1Picture, Pump2Picture, Pump3Picture, Pump4Picture, PumpMainPicture} from '.././UIComponents/PictureComponent';
import { MultiLabelComponent, WoodRegime, OilRegime} from '.././UIComponents/MultiLabelComponent';



import { Temp1, Temp2, Temp3, TempBuffer, TempBoilerBS, TempBoilerT } from '../url-library';
import { Pump1, Pump2, Pump3, Pump4, PumpMain } from '../url-library';
import { OilSelected, OilHeating, WoodSelected, WoodHeating } from '../url-library';



@Component({
    selector: 'page01',
    templateUrl: './page01.component.html',
    providers: [CVService,
        Temp1, Temp2, Temp3, TempBuffer, TempBoilerBS, TempBoilerT,
        Pump1, Pump2, Pump3, Pump4, PumpMain, OilSelected, OilHeating, WoodSelected, WoodHeating,
        Temp1Label, Temp2Label, Temp3Label, TempBufferLabel, TempBoilerBSLabel, TempBoilerTLabel,
        Pump1Picture, Pump2Picture, Pump3Picture, Pump4Picture, PumpMainPicture, WoodSelected, WoodHeating, OilSelected, OilHeating, WoodRegime, OilRegime
    ]
})

export class Page01Component implements OnInit {

    private test = true;


    tempTable: LabelComponent[];
    pumpTable: PictureComponent[];
    regimeTable: MultiLabelComponent[];

    constructor(private cvService: CVService,
        private temp1Label: Temp1Label,
        private temp2Label: Temp2Label,
        private temp3Label: Temp3Label,
        private tempBufferLabel: TempBufferLabel,
        private tempBoilerBSLabel: TempBoilerBSLabel,
        private tempBoilerTLabel: TempBoilerTLabel,

        private pump1Picture: Pump1Picture,
        private pump2Picture: Pump2Picture,
        private pump3Picture: Pump3Picture,
        private pump4Picture: Pump4Picture,
        private pumpMainPicture: PumpMainPicture,

        private woodRegime: WoodRegime,
        private oilRegime: OilRegime,

    ) {
        this.tempTable = new Array<LabelComponent>();
        this.pumpTable = new Array<PictureComponent>();
        this.regimeTable = new Array<MultiLabelComponent>();
    }

    getCV(): void
    {
        this.tempTable.push(this.temp1Label);
        this.tempTable.push(this.temp2Label);
        this.tempTable.push(this.temp3Label);
        this.tempTable.push(this.tempBufferLabel);
        this.tempTable.push(this.tempBoilerBSLabel);
        this.tempTable.push(this.tempBoilerTLabel);

        this.pumpTable.push(this.pump1Picture);
        this.pumpTable.push(this.pump2Picture);
        this.pumpTable.push(this.pump3Picture);
        this.pumpTable.push(this.pump4Picture);
        this.pumpTable.push(this.pumpMainPicture);

        this.regimeTable.push(this.oilRegime);
        this.regimeTable.push(this.woodRegime);
    }

    ngOnInit(): void {
        this.getCV();
    }

    

 
}




