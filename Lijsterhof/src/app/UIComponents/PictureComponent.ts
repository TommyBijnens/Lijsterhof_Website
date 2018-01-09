import { Observable, Subscription } from 'rxjs/Rx';
import { CVService } from '.././cv.service';
import { URLLibrary } from '.././url-library';
import 'rxjs/add/observable/interval';
import "rxjs/add/observable/interval";
import "rxjs/observable/IntervalObservable";
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Pump1, Pump2, Pump3, Pump4, PumpMain} from '.././url-library';



@Injectable()
export class PictureComponent {
    componentName: string;
    componentService: Observable<string>;
    cvService: CVService;
    serviceInfo: URLLibrary;
    picture: string;
    Text: string = "...";
    color: string = "black";

    errorMessage: string;
    constructor(private _cvService: CVService,private _serviceInfo: URLLibrary) {
        this.picture = "stop.gif";
        this.Text = "...";
        this.color = "black";
        this.cvService = _cvService;
        this.serviceInfo = _serviceInfo;
        this.componentService = this.cvService.getService(this.serviceInfo);
        this.componentService.subscribe(
            cv => {
                this.Text = "Uitgeschakeld";
                this.color = "blue";
                if (cv == "1") {
                    this.Text = "In werking"
                    this.color = "red";
                    this.picture = "rotation.gif";
                }
            },
            error => this.errorMessage = <any>error);
    }
    getPicture() {
        return this.picture;
    }
    getText() {
        return this.Text;
    }
    getColor() {
        return this.color;
    }
}

@Injectable()
export class Pump1Picture extends PictureComponent {
    componentName = "Bruno & Sandy - Pomp 1 - Warm water";
    constructor(private __cvService: CVService, private urlClass: Pump1) { super(__cvService, urlClass); }
}

@Injectable()
export class Pump2Picture extends PictureComponent {
    componentName = "Bruno & Sandy - Pomp 2 - Verwarming";
    constructor(private __cvService: CVService, private urlClass: Pump2) { super(__cvService, urlClass); }
}

@Injectable()
export class Pump3Picture extends PictureComponent {
    componentName = "Tommy - Pomp 1 - Warm water";
    constructor(private __cvService: CVService, private urlClass: Pump3) { super(__cvService, urlClass); }
}

@Injectable()
export class Pump4Picture extends PictureComponent {
    componentName = "Tommy - Pomp 2 - Verwarming";
    constructor(private __cvService: CVService, private urlClass: Pump4) { super(__cvService, urlClass); }
}

@Injectable()
export class PumpMainPicture extends PictureComponent {
    componentName = "Hoofdpomp";
    constructor(private __cvService: CVService, private urlClass: PumpMain) { super(__cvService, urlClass); }
}
