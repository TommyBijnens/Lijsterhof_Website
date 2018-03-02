import { Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { URLLibrary } from './url-library';
import { ConfigurationService } from './config';

import { of } from 'rxjs/observable/of';

import {LocalProxy} from './localproxy';

import{AppSettings} from'./app.config';

@Injectable()
export class RoomTempService {


    constructor(private http: Http) {}

    
    public getTemp1()
    {
        var lp = new LocalProxy();
        var test = lp.get(this.http,AppSettings.THERMOMETER01_ENDPOINT)//this.http.get("http://192.168.0.153/");
        return test
            .map(this.extractData)
            .catch(this.handleError);
       //  return of("18.333")
    }


    public getTemp2()
    {
        var lp = new LocalProxy();
        var test = lp.get(this.http, AppSettings.THERMOMETER02_ENDPOINT);
        return test
            .map(this.extractData)
            .catch(this.handleError);
        // return of("18.3")
    }



    public getTempOutdoor()
    {
        var test = this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Mechelen&APPID=b694cc2ce9e6372989471765efe92429&units=metric");
        return test
        .map(this.extractOutdoorData)
        .catch(this.handleError);
    }
   
    public getTemp1_H_Max_Setting() { return this.getSetting(AppSettings.DATABASE_GET_T1_H_MAX_SETTING);}
    public getTemp1_H_Min_Setting() { return this.getSetting(AppSettings.DATABASE_GET_T1_H_MIN_SETTING);}
    public getTemp1_M_Max_Setting() { return this.getSetting(AppSettings.DATABASE_GET_T1_M_MAX_SETTING);}
    public getTemp1_M_Min_Setting() { return this.getSetting(AppSettings.DATABASE_GET_T1_M_MIN_SETTING);}

    public getTemp2_H_Max_Setting() { return this.getSetting(AppSettings.DATABASE_GET_T2_H_MAX_SETTING);}
    public getTemp2_H_Min_Setting() { return this.getSetting(AppSettings.DATABASE_GET_T2_H_MIN_SETTING);}
    public getTemp2_M_Max_Setting() { return this.getSetting(AppSettings.DATABASE_GET_T2_M_MAX_SETTING);}
    public getTemp2_M_Min_Setting() { return this.getSetting(AppSettings.DATABASE_GET_T2_M_MIN_SETTING);}


    public setTemp1_H_Max_Setting(value: number){this.changeSetting(AppSettings.DATABASE_SET_T1_H_MAX_SETTING, value)}
    public setTemp1_H_Min_Setting(value: number){this.changeSetting(AppSettings.DATABASE_SET_T1_H_MIN_SETTING, value)}
    public setTemp1_M_Max_Setting(value: number){this.changeSetting(AppSettings.DATABASE_SET_T1_M_MAX_SETTING, value)}
    public setTemp1_M_Min_Setting(value: number){this.changeSetting(AppSettings.DATABASE_SET_T1_M_MIN_SETTING, value)}

    public setTemp2_H_Max_Setting(value: number){this.changeSetting(AppSettings.DATABASE_SET_T2_H_MAX_SETTING, value)}
    public setTemp2_H_Min_Setting(value: number){this.changeSetting(AppSettings.DATABASE_SET_T2_H_MIN_SETTING, value)}
    public setTemp2_M_Max_Setting(value: number){this.changeSetting(AppSettings.DATABASE_SET_T2_M_MAX_SETTING, value)}
    public setTemp2_M_Min_Setting(value: number){this.changeSetting(AppSettings.DATABASE_SET_T2_M_MIN_SETTING, value)}



    public getWaterSettingX1() { return this.getSetting(AppSettings.DATABASE_GET_WATERSETTINGX1);}
    public getWaterSettingY1() { return this.getSetting(AppSettings.DATABASE_GET_WATERSETTINGY1);}
    public getWaterSettingX2() { return this.getSetting(AppSettings.DATABASE_GET_WATERSETTINGX2);}
    public getWaterSettingY2() { return this.getSetting(AppSettings.DATABASE_GET_WATERSETTINGY2);}

    public setWaterSettingX1(value: number){this.changeSetting(AppSettings.DATABASE_SET_WATERSETTINGX1, value)}
    public setWaterSettingY1(value: number){this.changeSetting(AppSettings.DATABASE_SET_WATERSETTINGY1, value)}
    public setWaterSettingX2(value: number){this.changeSetting(AppSettings.DATABASE_SET_WATERSETTINGX2, value)}
    public setWaterSettingY2(value: number){this.changeSetting(AppSettings.DATABASE_SET_WATERSETTINGY2, value)}


    private changeSetting(Url: string, value: number): void
    {
        var test = this.http.get(Url + '//'+ value);
        var observable = test
        .map(this.extractData)
        .catch(this.handleError);


        if (!(value == null)) {
            let dummy: string;
            let errorMessage: string;
            observable.subscribe(
                cv => dummy = cv,
                error => errorMessage = <any>error);
            }
    }


    private getSetting(Url: string)
    {
        var test = this.http.get(Url);
        return test
        .map(this.extractData)
        .catch(this.handleError);
    }
       
    private extractData(res: Response) {
       
        let body = res.json().toString(); //res.json();
        //body = body.replace("Temperature is ","");
        //body = body.replace("C","")
        return parseFloat(body) ;
        //return 18;
    }

    private extractOutdoorData(res: Response) {
       
        let body = res.json();
        return body.main;
    }


    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    




}