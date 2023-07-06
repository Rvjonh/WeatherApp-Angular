import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
  /* do not steal my api key, angular sucks and too complicated config .env files */
  endPoint = "79fee46b93f7e4703820a353be0cd666";
  
  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.endPoint}`;
    return this.http.get(URL);
  }
}
