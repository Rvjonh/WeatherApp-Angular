import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  city:string = '';
  query:boolean = false;
  loading:boolean = false;
  errorMessage:string = '';

  cityName:string = '';
  countrySys:string = '';
  description:string = '';
  temperature:number = 0;
  humidity:number = 0;
  typeWeather:string = '';

  constructor(private _weatherService: WeatherService){}

  getWeather(){
    this.loading = true;

    this._weatherService.getWeather(this.city).subscribe((data)=>{
      this.query = true;
      this.loading = false;
      this.city = '';
      this.cityName = data.name;
      this.countrySys = data.sys.country;
      this.description = data.weather[0].description;
      this.humidity = data.main.humidity;
      this.temperature = Math.trunc(data.main.temp - 273);
      this.typeWeather = data.weather[0].main;

      this.errorMessage = '';
    }, error =>{
      this.query = false;
      this.loading = false;
      this.city = '';
      this.errorMessage = error.error.message;
      this.hideErrorMessage();
    })
  }

  hideErrorMessage(){
    /* hide component in template, async with css animation */
    setTimeout(() => {
      this.errorMessage = '';
    }, 2500);
  }
}
