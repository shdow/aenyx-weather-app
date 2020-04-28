import { WeatherDataMain } from "./weatherDataMain";
import { WeatherDataTemp } from "./weatherDataTemp";

export class WeatherData {
  weather: WeatherDataMain[];
  main: WeatherDataTemp;
  id: number;
  name: string;
}
