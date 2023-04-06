import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {data} from "../modules/data";

@Injectable({providedIn: 'root'})
export class methodserviceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getname(): Observable<String[]> {
    return this.http.get<String[]>(`${this.apiServerUrl}`);
  }

  public getmassiv(): Observable<String[][]> {
    return this.http.get<String[][]>(`${this.apiServerUrl}/massiv`);
  }

  public senddata(dt: data): Observable<data> {
    console.log(dt.maxW);
    return this.http.post<data>(`${this.apiServerUrl}/data`, dt);
  }

}
