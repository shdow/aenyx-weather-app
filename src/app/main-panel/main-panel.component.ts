import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-panel",
  templateUrl: "./main-panel.component.html",
  styleUrls: ["./main-panel.component.css"],
})
export class MainPanelComponent implements OnInit {
  public location = "London,uk";
  public weatherData: WeatherData;
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
