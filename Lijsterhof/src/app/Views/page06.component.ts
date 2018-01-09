import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { OnInit } from '@angular/core';
import { CVService } from '../cv.service';
import { UIComponents as UI } from '../UIComponents';
import { DatalogComponents} from '../datalogComponents';
import { DatalogService } from '../datalog.service'
import { Observable } from 'rxjs/Observable';
import 'hammerjs';
import { Temp1Log, Temp2Log, Temp3Log, TempBLog } from '../url-library';



@Component({
  selector: 'page06',
  templateUrl: './page04.component.html',  
  providers: [HttpModule, DatalogService, Temp1Log, Temp2Log, Temp3Log, TempBLog ]
})

export class Page06Component implements OnInit {

    tempGraph: DatalogComponents.GraphSerieComponent[];


   // datalogService: DatalogService;
    private chartTitle: any ;

    errorMessage: string;




    constructor(private http: Http, private datalogService: DatalogService, private temp1: Temp1Log,
        private temp2: Temp2Log,
        private temp3: Temp3Log,
        private tempB: TempBLog    )
    {
        this.tempGraph = new Array<DatalogComponents.GraphSerieComponent>();
        this.chartTitle = { text: 'Testing' };
       // this.datalogService = new DatalogService(http);
    }

   

    getData(): void
    {
        this.tempGraph.push(new DatalogComponents.GraphSerieComponent(this.datalogService,this.temp1, 30, 48, "Temp 1"));
        this.tempGraph.push(new DatalogComponents.GraphSerieComponent(this.datalogService, this.temp2, 30, 48, "Temp 2"));
        this.tempGraph.push(new DatalogComponents.GraphSerieComponent(this.datalogService, this.temp3, 30, 48, "Temp 3"));
        this.tempGraph.push(new DatalogComponents.GraphSerieComponent(this.datalogService, this.tempB, 30, 48, "Temp Buffer"));
    }

    ngOnInit(): void {
        this.getData();
    }
}



