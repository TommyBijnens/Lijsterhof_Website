import { Injectable } from '@angular/core';
import { ExportParameter } from './exportParameter';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExportParameterService {

  constructor(private http: HttpClient) { }

  getExportParameter(group: string, key: string): Observable<ExportParameter> 
{
return this.http.get<ExportParameter>("http://webservice.lijsterhof.be/api/"+group+"/"+key);
}

}
