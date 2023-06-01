import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cases, Vaccines } from './models/covid.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private _baseUrl: string = `${environment.baseUrl}`;

  constructor(private http: HttpClient) { }

  getVaccines(country: string){
    return this.http.get<Vaccines>(`${this._baseUrl}vaccines?country=${country}`);
  }

  getCases(country: string){
    return this.http.get<Cases>(`${this._baseUrl}cases?country=${country}`);
  }
}
