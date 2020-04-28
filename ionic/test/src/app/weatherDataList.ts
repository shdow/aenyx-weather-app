export class WeatherDataList {
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
}
