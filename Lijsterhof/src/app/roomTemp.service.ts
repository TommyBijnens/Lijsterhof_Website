import { Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { URLLibrary } from './url-library';
import { ConfigurationService } from './config';



@Injectable()
export class RoomTempService {

    constructor(private http: Http) {}


    
    public getTemp1()
    {
        var test = this.http.get("http://192.168.0.153/");
        return test
            .map(this.extractData)
            .catch(this.handleError);
    }


   
    

       
    private extractData(res: Response) {
       
        let body = res.json(); //res.json();
        return body ;
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