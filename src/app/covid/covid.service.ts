import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cases, Vaccines } from './models/covid.model';

@Injectable({
  providedIn: 'root'
})

export class CovidService {
  private _baseUrl: string = `${environment.baseUrl}`;
  private _currentSessionCount: number = 0;
  private readonly sessionCountKey = 'sessionCountKey';

  constructor(private http: HttpClient) { 
    const sessionCount = localStorage.getItem(this.sessionCountKey);
    if (sessionCount){
      this._currentSessionCount = JSON.parse(sessionCount);
    }
    else{
      localStorage.setItem(this.sessionCountKey, JSON.stringify(this._currentSessionCount));
    }
  }

  getVaccines(country: string){
    this._currentSessionCount++;
    console.log(this._currentSessionCount);
    return this.http.get<Vaccines>(`${this._baseUrl}vaccines?country=${country}`);
  }

  getCases(country: string){
    this._currentSessionCount++;
    console.log(this._currentSessionCount);

    return this.http.get<Cases>(`${this._baseUrl}cases?country=${country}`);
  }
}
