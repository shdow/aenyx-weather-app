import { Component, OnInit } from "@angular/core";
import { WeatherApiService } from "../weather-api.service";
import { WeatherData } from "../weatherData";

@Component({
  selector: "app-main-panel",
  templateUrl: "./main-panel.component.html",
  styleUrls: ["./main-panel.component.scss"],
})
export class MainPanelComponent implements OnInit {
  public location = "Bucharest";
  public weatherData: WeatherData;
  index1 = 0;
  index2 = 0;
  constructor(private weatherApi: WeatherApiService) {}

  ngOnInit(): void {
    this.getLatestForecast();
  }
  getLatestForecast() {
    this.weatherApi
      .getWeatherApi(this.location)
      .subscribe((data) => (this.weatherData = data));
  }
}
