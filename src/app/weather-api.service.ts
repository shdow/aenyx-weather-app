import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherData } from "./weatherData";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class WeatherApiService {
  private url = environment.apiUrl;
  private key = environment.apiKey;

  constructor(private http: HttpClient) {}

  getWeatherApi(loc: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${this.url}weather?q=${loc}&units=metric&appid=${this.key}`
    );
  }
}
