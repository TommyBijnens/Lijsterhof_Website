import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { URLLibrary } from './url-library';
import { ConfigurationService } from './config';


@Injectable()
export class DatalogService {

    constructor(private http: Http, private configuration: ConfigurationService) {

    }


    
   public getLog(input: URLLibrary, numberOfItems: number, interval: number)
    {
        
        //var test = this.http.get("../"+input);
        var test = this.http.get(input.getDatalogURL(this.configuration) + interval + "/" + numberOfItems);
       
        return test
            .map(this.extractData)
            .catch(this.handleError);
            
    }


   public getCounterLog(input: URLLibrary, numberOfItems: number, interval: number) {

       //var test = this.http.get("../"+input);
       var test = this.http.get(input.getDatalogCountersURL(this.configuration) + interval + "/" + numberOfItems);

       return test
           .map(this.extractData)
           .catch(this.handleError);

   }

      
    private extractData(res: Response) {
        let body = res.json();
        let result: number[] = []; //WAAROM NODIG ???
        for (var key in body) {
            result.push(Number(body[key].value));
        }
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