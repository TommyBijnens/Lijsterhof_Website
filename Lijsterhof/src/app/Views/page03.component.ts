import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { OnInit } from '@angular/core';
import { CVService } from '../cv.service';
import { Counter_BS_H, Counter_BS_M, Counter_BS_Tot } from '../url-library';
import { Counter_T_H, Counter_T_M, Counter_T_Tot } from '../url-library';
import { DayCounter_BS_H, DayCounter_BS_M, DayCounter_BS_Tot } from '../url-library';
import { DayCounter_T_H, DayCounter_T_M, DayCounter_T_Tot } from '../url-library';

import { Counter_BS_HLabel, Counter_BS_MLabel, Counter_BS_TotLabel } from '.././UIComponents/LabelComponent';
import { Counter_T_HLabel, Counter_T_MLabel, Counter_T_TotLabel } from '.././UIComponents/LabelComponent';
import { DayCounter_BS_HLabel, DayCounter_BS_MLabel, DayCounter_BS_TotLabel } from '.././UIComponents/LabelComponent';
import { DayCounter_T_HLabel, DayCounter_T_MLabel, DayCounter_T_TotLabel } from '.././UIComponents/LabelComponent';


import { LabelComponent, Temp1Label, Temp2Label, Temp3Label, TempBufferLabel, TempBoilerBSLabel, TempBoilerTLabel } from '.././UIComponents/LabelComponent';


@Component({
  selector: 'page03',
  templateUrl: './page03.component.html',
    providers: [CVService, Counter_BS_H, Counter_BS_M, Counter_BS_Tot, Counter_T_H, Counter_T_M, Counter_T_Tot, DayCounter_BS_H, DayCounter_BS_M, DayCounter_BS_Tot, DayCounter_T_H, DayCounter_T_M, DayCounter_T_Tot,
        Counter_BS_HLabel, Counter_BS_MLabel, Counter_BS_TotLabel, Counter_T_HLabel, Counter_T_MLabel, Counter_T_TotLabel,
        DayCounter_BS_HLabel, DayCounter_BS_MLabel, DayCounter_BS_TotLabel, DayCounter_T_HLabel, DayCounter_T_MLabel, DayCounter_T_TotLabel]
})

export class Page03Component implements OnInit {

    counterTable1: LabelComponent[];
    counterTable2: LabelComponent[];

    constructor(private cvService: CVService,
        private counter_BS_HLabel: Counter_BS_HLabel,
        private counter_BS_MLabel: Counter_BS_MLabel,
        private counter_BS_TotLabel: Counter_BS_TotLabel,
        private counter_T_HLabel: Counter_T_HLabel,
        private counter_T_MLabel: Counter_T_MLabel,
        private counter_T_TotLabel: Counter_T_TotLabel,
        private dayCounter_BS_HLabel: DayCounter_BS_HLabel,
        private dayCounter_BS_MLabel: DayCounter_BS_MLabel,
        private dayCounter_BS_TotLabel: DayCounter_BS_TotLabel,
        private dayCounter_T_HLabel: DayCounter_T_HLabel,
        private dayCounter_T_MLabel: DayCounter_T_MLabel,
        private dayCounter_T_TotLabel: DayCounter_T_TotLabel,


        
    ) {
        this.counterTable1 = new Array<LabelComponent>();
        this.counterTable2 = new Array<LabelComponent>();
    }

    getCV(): void
    {
        this.counterTable1.push(this.counter_BS_HLabel);
        this.counterTable1.push(this.counter_BS_MLabel);
        this.counterTable1.push(this.counter_BS_TotLabel);
        this.counterTable1.push(this.dayCounter_BS_HLabel);
        this.counterTable1.push(this.dayCounter_BS_MLabel);
        this.counterTable1.push(this.dayCounter_BS_TotLabel);


        this.counterTable2.push(this.counter_T_HLabel);
        this.counterTable2.push(this.counter_T_MLabel);
        this.counterTable2.push(this.counter_T_TotLabel);
        this.counterTable2.push(this.dayCounter_T_HLabel);
        this.counterTable2.push(this.dayCounter_T_MLabel);
        this.counterTable2.push(this.dayCounter_T_TotLabel);

 }

    ngOnInit(): void {
        this.getCV();
    }
}