import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class LocalProxy
{

    public get(http :Http, url: string):  Observable<Response>
    {
        while (url.indexOf("/") >= 0) {url = url.replace("/", "_");};
        while (url.indexOf("?") >= 0) {url = url.replace("?", "*");};
        let convertedUrl = "http://192.168.0.125/LocalProxy.svc/GetServiceString/"+url;
        return http.get(convertedUrl);
    }
}