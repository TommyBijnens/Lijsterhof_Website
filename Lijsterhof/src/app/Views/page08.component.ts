import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { OnInit } from '@angular/core';
//import { CV } from './cv';
import { CVService } from '../cv.service';
//import { Observable } from 'rxjs/Rx';
//import { service } from '../serviceLibrary';
import { UIComponents as UI } from '../UIComponents';
import { DatalogComponents} from '../datalogComponents';
import { DatalogService } from '../datalog.service'
import { Observable } from 'rxjs/Observable';
import 'hammerjs';
import { BS_H_Log, BS_M_Log, BS_TOT_Log, T_H_Log, T_M_Log, T_TOT_Log } from '../url-library';




@Component({
  selector: 'page08',
  templateUrl: './page07.component.html',
    providers: [HttpModule, DatalogService, BS_H_Log, BS_M_Log, BS_TOT_Log, T_H_Log, T_M_Log, T_TOT_Log]
})

export class Page08Component implements OnInit {

    graph: DatalogComponents.GraphSerieComponent[];
    TGraph: DatalogComponents.GraphSerieComponent[];


  //  datalogService: DatalogService;
    private chartTitle: any ;

    errorMessage: string;




    constructor(private http: Http, private datalogService: DatalogService,
        private bs_h_log: BS_H_Log,
        private bs_m_log: BS_M_Log,
        //private bs_tot_log: BS_TOT_Log,
        private t_h_log: T_H_Log,
        private t_m_log: T_M_Log,
        //private t_tot_log: T_TOT_Log
    )
    {
        this.graph = new Array<DatalogComponents.GraphSerieComponent>();
    //    this.TGraph = new Array<DatalogComponents.GraphSerieComponent>();
        this.chartTitle = { text: 'Testing' };
      //  this.datalogService = new DatalogService(http);
    }

   

    getData(): void
    {
        this.graph.push(new DatalogComponents.BarSerieComponent(this.datalogService, this.bs_h_log, 100, 288, "BS Hout"));
        this.graph.push(new DatalogComponents.BarSerieComponent(this.datalogService, this.bs_m_log, 100, 288, "BS Mazout"));
        this.graph.push(new DatalogComponents.BarSerieComponent(this.datalogService, this.t_h_log, 100, 288, "T Hout"));
        this.graph.push(new DatalogComponents.BarSerieComponent(this.datalogService, this.t_m_log, 100, 288, "T Mazout"));

    }

    ngOnInit(): void {
        this.getData();
    }
}



