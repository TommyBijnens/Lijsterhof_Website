import { Observable, Subscription } from 'rxjs/Rx';
import { CVService } from '.././cv.service';
import { URLLibrary } from '.././url-library';
import 'rxjs/add/observable/interval';
import "rxjs/add/observable/interval";
import "rxjs/observable/IntervalObservable";
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Setup1, Setup2 } from '.././url-library';


export class NumberBoxComponent {
    componentName: string;
    value: number;
    componentService: Observable<string>;

    componentPostService: Observable<string>;

    result: string;
    errorMessage: string;
    cvService: CVService;
    serviceInfo: URLLibrary;


    constructor(_cvService: CVService, _serviceInfo: URLLibrary) {
        this.cvService = _cvService;
        this.serviceInfo = _serviceInfo;
        this.componentService = this.cvService.getService(this.serviceInfo);

        this.componentService.subscribe(
            cv => this.value = Number(cv),
            error => this.errorMessage = <any>error);
    }

    getValue() {
        return this.result;
    }

    changeValue() {



        if (!(this.value == null)) {
            this.componentPostService = this.cvService.postService(this.serviceInfo, this.value);
            let dummy: string;
            this.componentPostService
                .subscribe(
                cv => dummy = cv,
                error => this.errorMessage = <any>error);
        }


    }
}


@Injectable()
export class Setup1Box extends NumberBoxComponent {
    componentName = "Water temperatuur";
    constructor(private __cvService: CVService, private urlClass: Setup1) { super(__cvService, urlClass); }
}


@Injectable()
export class Setup2Box extends NumberBoxComponent {
    componentName = "Buffer instelling";
    constructor(private __cvService: CVService, private urlClass: Setup2) { super(__cvService, urlClass); }
}