import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { OnInit } from '@angular/core';

import { ExportParameter } from '../exportparameter';
import { ParameterDisplayComponent} from '../parameter-display/parameter-display.component';
import { ExportParameterService } from '../export-parameter.service';

@Component({
    selector: 'page03',
    templateUrl: './page03.component.html',
    providers: [ExportParameterService]
})

export class Page03Component implements OnInit {

    BSList: ExportParameter[];
    TList: ExportParameter[];

    
    constructor(private exportParameterService: ExportParameterService) {}
   

    ngOnInit(): void {
   
        this.BSList = [
            ExportParameter.counterWoodBS(),
            ExportParameter.counterOilBS(),
            ExportParameter.counterTotalBS(),
            ExportParameter.dayCounterWoodBS(),
            ExportParameter.dayCounterOilBS(),
            ExportParameter.dayCounterTotalBS(),
            ];
            this.BSList.forEach(xp => xp.link(this.exportParameterService));

            this.TList = [
            ExportParameter.counterWoodT(),
            ExportParameter.counterOilT(),
            ExportParameter.counterTotalT(),
            ExportParameter.dayCounterWoodT(),
            ExportParameter.dayCounterOilT(),
            ExportParameter.dayCounterTotalT(),
            ];
            this.TList.forEach(xp => xp.link(this.exportParameterService));

    }
}