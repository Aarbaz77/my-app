import React from 'react';
import Temperature from './components/Temperature';
import Icon from './components/Icon';
import Location from './components/Location';
import WarningInfo from './components/WarningInfo';
import HighInfo from './components/HighInfo/index';
import Slider from './components/Slider';
import LaterDays from './components/LaterDays';
import Sun from './components/Sun';
import LowInfo from './components/LowInfo';

const HERE_API_KEY = process.env.REACT_APP_HERE_API_KEY;
const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    daylight: undefined,
    hightemp: undefined,
    lowtemp: undefined,
    windspeed: undefined,
    winddir: undefined,
    visibility: undefined,
    icon: undefined,
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    precipitation: undefined,
    latit: undefined,
    longit: undefined,
    cof: undefined,
    hourlyForecasts: [],
    dailyForecasts: [],
    error: undefined
  }

  fetchWeather = async (lati, long) => {
    if (lati && long) {
      try {
        const api_2 = await fetch(`https://weather.cc.api.here.com/weather/1.0/report.json?product=observation&latitude=${lati}&longitude=${long}&oneobservation=true&apiKey=${HERE_API_KEY}`, { method: "GET" });
        const out = await api_2.json();

        const api_dhour = await fetch(`https://weather.cc.api.here.com/weather/1.0/report.json?product=forecast_hourly&latitude=${lati}&longitude=${long}&oneobservation=true&apiKey=${HERE_API_KEY}`, { method: "GET" });
        const out2 = await api_dhour.json();

        const api_daily = await fetch(`https://weather.cc.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&latitude=${lati}&longitude=${long}&oneobservation=true&apiKey=${HERE_API_KEY}`, { method: "GET" });
        const out3 = await api_daily.json();

        const api_sun = await fetch(`https://weather.cc.api.here.com/weather/1.0/report.json?product=forecast_astronomy&latitude=${lati}&longitude=${long}&oneobservation=true&apiKey=${HERE_API_KEY}`, { method: "GET" });
        const out4 = await api_sun.json();

        // Process hourly forecasts (next 24 hours)
        let hourly = [];
        if (out2 && out2.hourlyForecasts && out2.hourlyForecasts.forecastLocation && out2.hourlyForecasts.forecastLocation.forecast) {
          hourly = out2.hourlyForecasts.forecastLocation.forecast.slice(0, 24).map(f => ({
            temp: f.temperature,
            desc: f.iconName,
            time: parseInt(f.localTime.substring(0, 2)),
            rainFall: f.rainFall === "*" ? 0 : parseFloat(f.rainFall) * 100
          }));
        }

        // Process daily forecasts (next 5 days)
        let daily = [];
        if (out3 && out3.dailyForecasts && out3.dailyForecasts.forecastLocation && out3.dailyForecasts.forecastLocation.forecast) {
          daily = out3.dailyForecasts.forecastLocation.forecast.slice(0, 5).map(f => ({
            temp: Math.round((parseFloat(f.highTemperature) + parseFloat(f.lowTemperature)) / 2),
            day: f.weekday,
            desc: f.iconName,
            wind: parseFloat(f.windSpeed),
            cof: f.rainFall === "*" ? 0 : parseFloat(f.rainFall) * 100
          }));
        }

        let cofVal = hourly.length > 0 ? hourly[0].rainFall : 0;

        this.setState({
          temperature: Math.round(parseFloat(out.observations.location[0].observation[0].temperature)),
          city: out.observations.location[0].city,
          country: out.observations.location[0].country,
          humidity: out.observations.location[0].observation[0].humidity,
          icon: out.observations.location[0].observation[0].iconLink,
          description: out.observations.location[0].observation[0].iconName,
          daylight: out.observations.location[0].observation[0].daylight,
          hightemp: Math.round(parseFloat(out.observations.location[0].observation[0].highTemperature)),
          lowtemp: Math.round(parseFloat(out.observations.location[0].observation[0].lowTemperature)),
          windspeed: parseFloat(out.observations.location[0].observation[0].windSpeed),
          winddir: out.observations.location[0].observation[0].windDescShort,
          visibility: parseFloat(out.observations.location[0].observation[0].distance),
          sunrise: out4.astronomy.astronomy[0].sunrise,
          sunset: out4.astronomy.astronomy[0].sunset,
          pressure: out.observations.location[0].observation[0].barometerPressure,
          precipitation: parseFloat(out2.hourlyForecasts.forecastLocation.forecast[0].precipitationProbability),
          latit: lati,
          longit: long,
          cof: cofVal,
          hourlyForecasts: hourly,
          dailyForecasts: daily,
          error: ""
        });

      } catch (error) {
        console.error("Error fetching weather data:", error);
        this.setState({ error: "Could not fetch weather data" });
      }
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const lati = e.target.elements.lat.value;
    const long = e.target.elements.long.value;
    await this.fetchWeather(lati, long);
  }

  getWeatherByCity = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country ? e.target.elements.country.value : "";
    if (city) {
      try {
        const address = country ? `${city},${country}` : city;
        const api_call = await fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${encodeURIComponent(address)}&apiKey=${HERE_API_KEY}`, { method: "GET" });
        const data = await api_call.json();

        if (data.items && data.items.length > 0) {
          const lat = data.items[0].position.lat;
          const lng = data.items[0].position.lng;
          await this.fetchWeather(lat, lng);
        } else {
          console.error("City not found", data);
        }
      } catch (error) {
        console.error("Error fetching geocode:", error);
      }
    }
  }

  render() {
    return (
      <div className="grid-container">
        <Temperature
          className="Temperature"
          temperature={this.state.temperature}
          hightemp={this.state.hightemp}
          lowtemp={this.state.lowtemp}
          description={this.state.description} />
        <Icon
          className="Icon"
          description={this.state.description}
          icon={this.state.icon} />
        <Location
          className="Location"
          getLocation={this.getWeather}
          getWeatherByCity={this.getWeatherByCity}
          cityname={this.state.city}
          countryname={this.state.country} />
        <WarningInfo
          className="WarningInfo"
          lati={this.state.latit}
          longi={this.state.longit}
          city={this.state.city}
          windSpeed={this.state.windspeed}
          visibility={this.state.visibility}
          cof={this.state.precipitation} />
        <HighInfo
          className="HighInfo"
          windspeed={this.state.windspeed}
          winddir={this.state.winddir}
          visibility={this.state.visibility}
          cof={this.state.cof}
          precipitation={this.state.precipitation} />
        <Slider
          className="Slider"
          hourlyForecasts={this.state.hourlyForecasts} />
        <LaterDays
          className="LaterDays"
          dailyForecasts={this.state.dailyForecasts} />
        <Sun
          className="Sun"
          description={this.state.description}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          daylight={this.state.daylight} />
        <LowInfo
          className="LowInfo"
          humidity={this.state.humidity}
          pressure={this.state.pressure} />
      </div>
    );
  }
}

export default App;
