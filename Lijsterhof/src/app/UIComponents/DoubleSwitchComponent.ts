import { Observable, Subscription } from 'rxjs/Rx';
import { CVService } from '.././cv.service';
import { URLLibrary } from '.././url-library';
import 'rxjs/add/observable/interval';
import "rxjs/add/observable/interval";
import "rxjs/observable/IntervalObservable";
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Setup1 } from '.././url-library';
import { BS_CV_H, BS_CV_M, BS_WW_H, BS_WW_M } from '.././url-library';
import { T_CV_H, T_CV_M, T_WW_H, T_WW_M } from '.././url-library';

export class DoubleSwitchComponent {
    componentName: string;
    checked1: boolean = false;
    disabled1: boolean = true;
    checked2: boolean = false;
    disabled2: boolean = true;
    componentEnabled: boolean = true;
    componentService1: Observable<string>;
    componentService2: Observable<string>;
    componentPostService1: Observable<string>;
    componentPostService2: Observable<string>;
    result: string;
    errorMessage: string;
    cvService: CVService;
    serviceInfo1: URLLibrary;
    serviceInfo2: URLLibrary;



    constructor(_cvService: CVService, _serviceInfo1: URLLibrary, _serviceInfo2: URLLibrary) {
        this.cvService = _cvService;
        this.serviceInfo1 = _serviceInfo1;
        this.serviceInfo2 = _serviceInfo2;
        this.componentService1 = this.cvService.getService(this.serviceInfo1);
        this.componentService2 = this.cvService.getService(this.serviceInfo2);
        this
        Observable.forkJoin(this.componentService1, this.componentService2)
            .subscribe(
            cv => {
                this.checked1 = (cv[0] == "1");
                if (this.componentEnabled) this.disabled1 = false
                this.checked2 = (cv[1] == "1");
                if (this.componentEnabled) this.disabled2 = false
            },
            error => this.errorMessage = <any>error);
    }
    getValue() {
        return this.result;
    }

    switch1() {

        let parameter1: number;
        if (this.checked1) parameter1 = 1;
        else parameter1 = 0;

        let dummy: string;
        this.componentPostService1 = this.cvService.postService(this.serviceInfo1, parameter1);




        this.componentPostService1
            .subscribe(
            cv => dummy = cv,
            error => this.errorMessage = <any>error);
    }

    switch2() {
        let parameter2: number;
        if (this.checked2) parameter2 = 1;
        else parameter2 = 0;
        let dummy: string;
        this.componentPostService2 = this.cvService.postService(this.serviceInfo2, parameter2);
        this.componentPostService2
            .subscribe(
            cv => dummy = cv,
            error => this.errorMessage = <any>error);
    }



}


@Injectable()
export class SetupBS_CV extends DoubleSwitchComponent {
    componentName = "Bruno & Sandy - Verwarming";
    componentEnabled = false;
    constructor(private __cvService: CVService, private urlClass1: BS_CV_H, private urlClass2: BS_CV_M) { super(__cvService, urlClass1, urlClass2); }
}

@Injectable()
export class SetupBS_WW extends DoubleSwitchComponent {
    componentName = "Bruno & Sandy - Warm water";
    componentEnabled = true;
    constructor(private __cvService: CVService, private urlClass1: BS_WW_H, private urlClass2: BS_WW_M) { super(__cvService, urlClass1, urlClass2); }
}

@Injectable()
export class SetupT_CV extends DoubleSwitchComponent {
    componentName = "Tommy - Verwarming";
    componentEnabled = false;
    constructor(private __cvService: CVService, private urlClass1: T_CV_H, private urlClass2: T_CV_M) { super(__cvService, urlClass1, urlClass2); }
}

@Injectable()
export class SetupT_WW extends DoubleSwitchComponent {
    componentName = "Tommy - Warm water";
    componentEnabled = true;
    constructor(private __cvService: CVService, private urlClass1: T_WW_H, private urlClass2: T_WW_M) { super(__cvService, urlClass1, urlClass2); }
}