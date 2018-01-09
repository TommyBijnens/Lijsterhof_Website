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
export class CVService {

    constructor(private http: Http, private configuration: ConfigurationService) {}


    
    public getService(input: URLLibrary)
    {
        var test = this.http.get(input.getURL(this.configuration));
        return test
            .map(this.extractData)
            .catch(this.handleError);
    }


    public postService(input: URLLibrary, inputNumber: number) {
        return this.postServiceString(input, inputNumber.toString());
    }


    public postServiceString(input: URLLibrary, inputNumber: string) {

        if (inputNumber == "NaN") test = this.http.get(input.postURL(this.configuration,"0"));//NAKIJKEN!!!
        else var test = this.http.get(input.postURL(this.configuration,inputNumber));
        return test
            .map(this.extractData)
            .catch(this.handleError);
    }
    

       
    private extractData(res: Response) {
        let body = res.json();
        return body /*.data*/ || {};
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