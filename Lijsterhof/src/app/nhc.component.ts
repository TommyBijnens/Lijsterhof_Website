import { NHCService } from './NHC.service';
import { Injectable } from '@angular/core';



@Injectable()
export class NHCItem {
    id: string;
    name: string;
    type: number;
    location: number;
    value1: number;
    value1_boolean: boolean;
    valuex: string = "abc";
    FloorLevel: number;

    nhcService: NHCService

    constructor(_nhcService: NHCService)
    {
        this.nhcService = _nhcService;
    }

    

    switch1()
    {
        let dummy: string;
        let errorMessage: string; 
        //this.componentPostService1 = this.cvService.postService(this.serviceInfo1, parameter1);
        this.nhcService.setAction(Number(this.id),this.value1_boolean)
            .subscribe(
            cv => dummy = cv,
            error => errorMessage = <any>error);
    }

    change1() {
        let dummy: string;
        let errorMessage: string;
        //this.componentPostService1 = this.cvService.postService(this.serviceInfo1, parameter1);
        this.nhcService.setActionNumber(Number(this.id), this.value1)
            .subscribe(
            cv => dummy = cv,
            error => errorMessage = <any>error);
    }


}

export class NHCResponse
{
    cmd: string;
    data: NHCItem[];
}




