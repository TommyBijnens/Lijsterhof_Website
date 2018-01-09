import { Observable } from 'rxjs/Rx';
import { DatalogService } from './datalog.service';
import { URLLibrary } from './url-library';
import 'rxjs/add/observable/interval';
import "rxjs/add/observable/interval";
import "rxjs/observable/IntervalObservable";
import 'rxjs/add/observable/of';



export module DatalogComponents {
export class GraphSerieComponent {
    name: string;
    componentService: Observable<string>;//WAS NUMBER[}]
    visible: boolean;
    datalogService: DatalogService;
    serviceInfo: URLLibrary;
    errorMessage: string;
    data: number[];



    constructor(_datalogService: DatalogService, _urlLibrary:URLLibrary, numberOfRecords: number, interval: number, displayName: string) {
        this.datalogService = _datalogService;
        this.componentService = this.datalogService.getLog(_urlLibrary, numberOfRecords, interval);
        this.name = displayName;
        this.componentService.subscribe(
            cv => {
                this.data = JSON.parse(cv);
            },
            error => this.errorMessage = <any>error);
       
    }
    getData() {
        return this.data;
    }

    Refresh()
    {
  
    }


    }






export class BarSerieComponent {
    name: string;
    componentService: Observable<string>;//WAS NUMBER[}]
    visible: boolean;
    datalogService: DatalogService;
    serviceInfo: URLLibrary;
    errorMessage: string;
    data: number[];



    constructor(_datalogService: DatalogService, _urlLibrary: URLLibrary, numberOfRecords: number, interval: number, displayName: string) {
        this.datalogService = _datalogService;
        this.componentService = this.datalogService.getCounterLog(_urlLibrary, numberOfRecords, interval);
        this.name = displayName;
        this.componentService.subscribe(
            cv => {
                this.data = JSON.parse(cv);
            },
            error => this.errorMessage = <any>error);

    }
    getData() {
        return this.data;
    }

    Refresh() {

    }


}




}