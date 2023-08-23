import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {data} from "../modules/data";
import {dynamic} from "../modules/dynamic";
import {methvetv} from "../methvetv";
import {dipdb} from "../modules/dipdb";
import {responsethree} from "../modules/responsethree";
import {dataga} from "../modules/dataga";

@Injectable({providedIn: 'root'})
export class methodserviceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public sendDataDyn(dt: data): Observable<dynamic> {
    return this.http.post<dynamic>(`${this.apiServerUrl}/dataDyn`, dt);
  }

  public senddataZhad(dt: data): Observable<methvetv> {
    return this.http.post<methvetv>(`${this.apiServerUrl}/dataZhad`, dt);
  }

  public senddataMethVetv(dt: data): Observable<methvetv> {
    return this.http.post<methvetv>(`${this.apiServerUrl}/dataMethVetv`, dt);
  }

  public senddataGenAlg(dt: dataga): Observable<responsethree> {
    return this.http.post<responsethree>(`${this.apiServerUrl}/dataGenAlg`, dt);
  }

  public addSol(herorep: dipdb): Observable<dipdb> {
    return this.http.post<dipdb>(`${this.apiServerUrl}/add`, herorep);
  }

}
