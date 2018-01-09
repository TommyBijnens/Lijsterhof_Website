import { Observable, Subscription } from 'rxjs/Rx';
import { CVService } from '.././cv.service';
import { URLLibrary } from '.././url-library';
import 'rxjs/add/observable/interval';
import "rxjs/add/observable/interval";
import "rxjs/observable/IntervalObservable";
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { WoodSelected, WoodHeating, OilSelected, OilHeating } from '.././url-library';


export class MultiLabelComponent {
    componentName: string;
    componentService1: Observable<string>;
    componentService2: Observable<string>;
    cvService: CVService;
    serviceInfo1: URLLibrary;
    serviceInfo2: URLLibrary;
    result: string = "...";
    option1: string = "Uitgeschakeld";
    option2: string = "Standby";
    option3: string = "In werking";
    errorMessage: string;
    constructor(private _cvService: CVService, private _serviceInfo1: URLLibrary, private _serviceInfo2: URLLibrary) {

        this.cvService = _cvService;
        this.serviceInfo1 = _serviceInfo1;
        this.serviceInfo2 = _serviceInfo2;

        this.componentService1 = this.cvService.getService(this.serviceInfo1);
        this.componentService2 = this.cvService.getService(this.serviceInfo2);

        Observable.forkJoin(this.componentService1, this.componentService2)
            .subscribe(
            cv => {
                this.result = this.option1;
                if (cv[0] == "1") this.result = this.option2;
                if (cv[1] == "1") if (cv[0] == "1") this.result = this.option3;
            },
            error => this.errorMessage = <any>error);


    }
    getValue() {
        return this.result;
    }

}


    @Injectable()
    export class WoodRegime extends MultiLabelComponent {
        componentName = "Houtketel";
        constructor(private __cvService: CVService, private urlClass1: WoodSelected, private urlClass2: WoodHeating) { super(__cvService, urlClass1, urlClass2); }
}


    @Injectable()
    export class OilRegime extends MultiLabelComponent {
        componentName = "Mazoutketel";
        constructor(private __cvService: CVService, private urlClass1: OilSelected, private urlClass2: OilHeating) { super(__cvService, urlClass1, urlClass2); }
    }