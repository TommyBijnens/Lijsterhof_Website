import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConfigurationService {
    constructor(private http: Http)
    {
        if (!this.onLine) {
            this.targetStart = "http://localhost:59392/service1.svc/rest/devices/" //OFFLINE
            this.DatalogEnd = "/PSBE-LT0656/";
        }
        else
        {
            this.targetStart = "http://192.168.0.150:8088/rest/devices/" //ONLINE
            this.DatalogEnd = "/WENDY-PC/";
        }

        if (this.onServer)
        {
            this.urlStart = "http://192.168.0.125/LocalProxy.svc/GetService/"; //SERVER
            this.NHCAdress = "http://192.168.0.125/LocalProxy.svc/"; //SERVER
            this.DatalogStart = "http://192.168.0.125/LocalProxy.svc"; //SERVER
        }
        else {
            this.urlStart = "http://localhost:57978/LocalProxy.svc/GetService/"; //LAPTOP
            this.NHCAdress = "http://localhost:57978/LocalProxy.svc/test/"; //LAPTOP
            this.DatalogStart = "http://localhost:57978/LocalProxy.svc"
        }
        

        this.DatalogAdress = this.DatalogStart + this.DatalogEnd;
    }



    private onServer: Boolean = true;
    private onLine: Boolean = true;


    private DatalogStart: string;
    private DatalogEnd: string;
    public targetStart: string;
    public urlStart: string;
    public NHCAdress: string;
    public DatalogAdress: string;

    
    }





             // ------------------------------------------------------------------------------
             // OFFLINE http://localhost:59392/service1.svc/rest/devices/1/attributes/1/value
             // ONNLINE http://192.168.0.150:8088/rest/devices/1/attributes/1/value
             // OFFLINE cvUrlTemp1": "http://localhost:57978/LocalProxy.svc/Logo/temp1",
             // ONNLINE cvUrlTemp1: "http://192.168.0.125/LocalProxy.svc/Logo/temp11",
             // ------------------------------------------------------------------------------
