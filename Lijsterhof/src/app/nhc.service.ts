import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import { service } from './serviceLibrary';
import { NHCResponse, NHCItem } from './nhc.component';
import { ConfigurationService } from './config';



@Injectable()
export class NHCService {


    urlStart: string;

    constructor(private http: Http, private configuration: ConfigurationService) {
        this.urlStart = configuration.NHCAdress;
    }

    
    public getSystemInfo() {
        var test = this.http.get(this.urlStart + "NHCSystemInfo");
        return test
            .map(this.extractData)
            .catch(this.handleError);
    }


    
    public getActions()
    {
        var test = this.http.get(this.urlStart+"NHCActions");
        return test
            .map(this.extractData)
            .catch(this.handleError);
   }

   

    public setAction(id: number, newValue: boolean) {
        let newNumber: number = 0;
        if (newValue) newNumber = 100;
        return this.setActionNumber(id, newNumber);
    }


    public setActionNumber(id: number, newValue: Number) {

       // if (newValue == "NaN") { }
        var test = this.http.get(this.urlStart+"NHCSet/"+id+"/"+newValue);
        return test
            .map(this.extractData)
            .catch(this.handleError);
    }
   

       
    private extractData(res: Response) {
        
        let body = res.json();
        return body || {};
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