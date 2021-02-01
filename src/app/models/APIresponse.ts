export class APIresponse {
  message: number;

  list: [TriHourData];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number
    }
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number
  };
}

export class TriHourData {
  dt: number; // Time of data calculation, unix, UTC
  main: MainData;
  weather: [WeatherData];
  clouds: CloudsData;
  wind: WindData;
  visibility: number;
  snow: SnowData;
  'dt_txt': Date; // formatted like "2021-01-31 03:00:00"
}

export class WeatherData {
  id: number; // Condition ID
  main: string; // main weather?
  description: string;
  icon: string; // weather icon id
}

export class MainData {
  temp: number;
  'feels_like': number;
  'temp_min': number;
  'temp_max': number;
  pressure: number;
  humidity: number;
}

export class CloudsData {
  all: number; // cloudiness percentage
}

export class WindData {
  speed: number;
  deg: number;
}

export class SnowData {
  '3h': number; // snow volume for 3 hours
}
