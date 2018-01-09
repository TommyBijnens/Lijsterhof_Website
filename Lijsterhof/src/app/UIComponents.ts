import { Observable, Subscription } from 'rxjs/Rx';
import { CVService } from './cv.service';
import { URLLibrary } from './url-library';
import 'rxjs/add/observable/interval';
import "rxjs/add/observable/interval";
import "rxjs/observable/IntervalObservable";
import 'rxjs/add/observable/of';
import { NHCService } from './NHC.service';
import { NHCResponse, NHCItem } from './nhc.component';
import { Temp1, Temp2, Temp3, TempBuffer, TempBoilerBS, TempBoilerT } from './url-library';
import { Injectable } from '@angular/core';
import { UIComponents as UI } from './UIComponents';


export module UIComponents {

export class NHCZone {
    componentName: string;
    componentService: Observable<string>;
    nhcService: NHCService;
    selectedLocation: number;
    result: NHCItem[];
    errorMessage: string;

    constructor(_nhcService: NHCService, _name: string, _selectedLocation: number) {
        this.componentName = _name;
        this.nhcService = _nhcService;
        this.selectedLocation = _selectedLocation;
        this.componentService = this.nhcService.getActions();
        this.componentService   
            .subscribe(
            cv => {


                let nhcResponse: NHCResponse = JSON.parse(cv);
                let nhcData: NHCItem[] = nhcResponse.data;
                let nhcResult: NHCItem[] = new Array<NHCItem>();

                for (var n in nhcData) {
                    if (nhcData[n].location == _selectedLocation) {
                        let nhcNewData = new NHCItem(this.nhcService);
                        nhcNewData.id = nhcData[n].id;
                        nhcNewData.name = nhcData[n].name;
                        if (nhcNewData.name.search("0 - ") > -1) {nhcNewData.FloorLevel = 0; nhcNewData.name = nhcNewData.name.replace("0 - ", "")/* + " (0)"*/;}
                        if (nhcNewData.name.search("1 - ") > -1) {nhcNewData.FloorLevel = 1; nhcNewData.name = nhcNewData.name.replace("1 - ", "")/* + " (1)"*/; }
                        if (nhcNewData.name.search("2 - ") > -1) {nhcNewData.FloorLevel = 2; nhcNewData.name = nhcNewData.name.replace("2 - ", "")/* + " (1)"*/;}
                        nhcNewData.value1 = nhcData[n].value1;
                        nhcNewData.value1_boolean = (nhcData[n].value1 > 0)
                        nhcNewData.valuex = "xxx";
                        nhcNewData.location = nhcData[n].location;
                        nhcNewData.type = nhcData[n].type;
                        nhcResult.push(nhcNewData);
                        nhcData[n].value1_boolean = (nhcData[n].value1 > 0)
                    }
                    //if (typeof cv === "object") this.result = "0"
                }
                var sortedArray: NHCItem[] = nhcResult.sort((n1, n2) => {
                    if (n1.FloorLevel > n2.FloorLevel) {return 1;}
                    if (n1.FloorLevel < n2.FloorLevel) { return -1; }
                    if (n1.FloorLevel == n2.FloorLevel) if (n1.name > n2.name) { return 1; }
                    if (n1.FloorLevel == n2.FloorLevel) if (n1.name < n2.name) { return -1; }
                    return 0;
                });

                    this.result = nhcResult;
            },
            error => this.errorMessage = <any>error);
    }
    getValue() {
        return this.result;
    }



    //Unsubscribe???


}

    class infoLine {
        name: string;
        value: string;
        constructor(name: string, value: string) { this.name = name; this.value = value }

        }


    export class NHCSystemInfo {
        componentName: string;
        componentService: Observable<string>;
        nhcService: NHCService;

        result: infoLine[];
        errorMessage: string;

        constructor(_nhcService: NHCService) {
            this.result = new Array<infoLine>();
            this.nhcService = _nhcService;
            this.componentService = this.nhcService.getSystemInfo();
            this.componentService
                .subscribe(
                cv => {
                    let nhcResponse = JSON.parse(cv);
                    let infoResponse = nhcResponse.data;
                    
                    this.result.push(new infoLine("Systeem datum", this.convertDate(infoResponse.time)))
                    this.result.push(new infoLine("Laatste update", this.convertDate(infoResponse.lastconfig)));
                    this.result.push(new infoLine("Laatste energie reset", this.convertDate(infoResponse.lastenergyerase)))
                   
                    this.result.push(new infoLine("Versie", infoResponse.swversion));
                    this.result.push(new infoLine("API versie", infoResponse.api));
                    this.result.push(new infoLine("Taal", infoResponse.language));
                    this.result.push(new infoLine("Eenheden", infoResponse.currency))
                    

                },
                error => this.errorMessage = <any>error);
        }

        convertDate(input: string)
        {
            let date = new Date();
            let year = Number(input.slice(0, 4));
            let month = Number(input.slice(4, 6));
            let day = Number(input.slice(6, 8));
            date.setFullYear(year, month, day);
            let hour = Number(input.slice(8, 10));
            let minute = Number(input.slice(10, 12));
            date.setHours(hour, minute);
            let result: string = day + "/" + month + "/" + year + " - " + hour + ":" + minute;
            if (minute == 0) result = result + "0";
            return result;
        }

        getValue() {
            return this.result;
        }


 
    }




   


 
 



 




}