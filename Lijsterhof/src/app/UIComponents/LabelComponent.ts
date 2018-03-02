import { Observable, Subscription } from 'rxjs/Rx';
import { CVService } from '.././cv.service';
import { URLLibrary } from '.././url-library';
import 'rxjs/add/observable/interval';
import "rxjs/add/observable/interval";
import "rxjs/observable/IntervalObservable";
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Temp1, Temp2, Temp3, TempBuffer, TempBoilerBS, TempBoilerT, Setup1, Setup2 } from '.././url-library';
import { Counter_BS_H, Counter_BS_M, Counter_BS_Tot } from '../url-library';
import { Counter_T_H, Counter_T_M, Counter_T_Tot } from '../url-library';
import { DayCounter_BS_H, DayCounter_BS_M, DayCounter_BS_Tot } from '../url-library';
import { DayCounter_T_H, DayCounter_T_M, DayCounter_T_Tot } from '../url-library';



@Injectable()
export class LabelComponent {
    componentName: string;
    componentService: Observable<string>;
    result: string = "...";
    errorMessage: string;
    subscribedService: Subscription;

    constructor(private _cvService: CVService, private _serviceInfo: URLLibrary) {
        this.componentService = _cvService.getService(_serviceInfo);
        this.componentService
            .subscribe(
            cv => {
                if (typeof cv === "object") this.result = "0"
                else this.result = cv
            },
            error => this.errorMessage = <any>error);

    }
    getValue() { return this.result; }
    unsubscribe() { this.subscribedService.unsubscribe; }
}


@Injectable()
export class Temp1Label extends LabelComponent {
    componentName = "Temperatuur 1";
    constructor(private __cvService: CVService, private urlClass: Temp1) { super(__cvService, urlClass); }
}

@Injectable()
export class Temp2Label extends LabelComponent {
    componentName = "Temperatuur 2";
    constructor(private __cvService: CVService, private urlClass: Temp2) { super(__cvService, urlClass); }
}

@Injectable()
export class Temp3Label extends LabelComponent {
    componentName = "Temperatuur 3";
    constructor(private __cvService: CVService, private urlClass: Temp3) { super(__cvService, urlClass); }
}

@Injectable()
export class WaterSettingLabel extends LabelComponent {
    componentName = "Water temperatuur setting";
    constructor(private __cvService: CVService, private urlClass: Setup1) { super(__cvService, urlClass); }
}

@Injectable()
export class BufferSettingLabel extends LabelComponent {
    componentName = "Buffer temperatuur setting";
    constructor(private __cvService: CVService, private urlClass: Setup2) { super(__cvService, urlClass); }
}

@Injectable()
export class TempBufferLabel extends LabelComponent {
    componentName = "Temperatuur Buffer";
    constructor(private __cvService: CVService, private urlClass: TempBuffer) { super(__cvService, urlClass); }
}
@Injectable()
export class TempBoilerBSLabel extends LabelComponent {
    componentName = "Boiler Bruno & Sandy";
    constructor(private __cvService: CVService, private urlClass: TempBoilerBS) { super(__cvService, urlClass); }
}
@Injectable()
export class TempBoilerTLabel extends LabelComponent {
    componentName = "Boiler Tommy";
    constructor(private __cvService: CVService, private urlClass: TempBoilerT) { super(__cvService, urlClass); }
}



@Injectable()
export class Counter_BS_HLabel extends LabelComponent {
    componentName = "Hout";
    constructor(private __cvService: CVService, private urlClass: Counter_BS_H) { super(__cvService, urlClass); }
}
@Injectable()
export class Counter_BS_MLabel extends LabelComponent {
    componentName = "Mazout";
    constructor(private __cvService: CVService, private urlClass: Counter_BS_M) { super(__cvService, urlClass); }
}
@Injectable()
export class Counter_BS_TotLabel extends LabelComponent {
    componentName = "Totaal";
    constructor(private __cvService: CVService, private urlClass: Counter_BS_Tot) { super(__cvService, urlClass); }
}
@Injectable()
export class Counter_T_HLabel extends LabelComponent {
    componentName = "Hout";
    constructor(private __cvService: CVService, private urlClass: Counter_T_H) { super(__cvService, urlClass); }
}
@Injectable()
export class Counter_T_MLabel extends LabelComponent {
    componentName = "Mazout";
    constructor(private __cvService: CVService, private urlClass: Counter_T_M) { super(__cvService, urlClass); }
}
@Injectable()
export class Counter_T_TotLabel extends LabelComponent {
    componentName = "Totaal";
    constructor(private __cvService: CVService, private urlClass: Counter_T_Tot) { super(__cvService, urlClass); }
}
@Injectable()
export class DayCounter_BS_HLabel extends LabelComponent {
    componentName = "Hout (dagteller)";
    constructor(private __cvService: CVService, private urlClass: DayCounter_BS_H) { super(__cvService, urlClass); }
}
@Injectable()
export class DayCounter_BS_MLabel extends LabelComponent {
    componentName = "Mazout (dagteller)";
    constructor(private __cvService: CVService, private urlClass: DayCounter_BS_M) { super(__cvService, urlClass); }
}
@Injectable()
export class DayCounter_BS_TotLabel extends LabelComponent {
    componentName = "Totaal (dagteller)";
    constructor(private __cvService: CVService, private urlClass: DayCounter_BS_Tot) { super(__cvService, urlClass); }
}
@Injectable()
export class DayCounter_T_HLabel extends LabelComponent {
    componentName = "Hout (dagteller)";
    constructor(private __cvService: CVService, private urlClass: DayCounter_T_H) { super(__cvService, urlClass); }
}
@Injectable()
export class DayCounter_T_MLabel extends LabelComponent {
    componentName = "Mazout (dagteller)";
    constructor(private __cvService: CVService, private urlClass: DayCounter_T_M) { super(__cvService, urlClass); }
}
@Injectable()
export class DayCounter_T_TotLabel extends LabelComponent {
    componentName = "Totaal (dagteller)";
    constructor(private __cvService: CVService, private urlClass: DayCounter_T_Tot) { super(__cvService, urlClass); }
}