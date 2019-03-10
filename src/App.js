import React from 'react';
import Temperature from './components/Temperature';
import Icon  from './components/Icon';
import Location from './components/Location';
import WarningInfo from './components/WarningInfo';
import HighInfo from './components/HighInfo/index';
import Slider from './components/Slider';
import LaterDays from './components/LaterDays';
import Sun from './components/Sun';
import LowInfo from './components/LowInfo';

class App extends React.Component {
  //Giving the state default value
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
    latit : undefined,
    longit: undefined,
    temp1:undefined,
    temp2:undefined,
    temp3:undefined,
    temp4:undefined,
    temp5:undefined,
    day1: undefined,
    day2: undefined,
    day3: undefined,
    day4: undefined,
    day5: undefined,
    des1: undefined,
    des2: undefined,
    des3: undefined,
    des4: undefined,
    des5: undefined,
    cof1: undefined,                                                                                                                                                                   
    cof2: undefined,                                                                                                                                                                   
    cof3: undefined,                                                                                                                                                                   
    cof4: undefined,                                                                                                                                                                   
    cof5: undefined, 
    wind1: undefined,
wind2: undefined,
wind3: undefined,
wind4: undefined,
wind5: undefined,
    temps1: undefined,
    temps2: undefined,
    temps3: undefined,
    temps4: undefined,
    temps5: undefined,
    temps6: undefined,
    temps7: undefined,
    temps8: undefined,
    temps9: undefined,
    temps10: undefined,
    temps11: undefined,
    temps12: undefined,
    temps13: undefined,
    temps14: undefined,
    temps15: undefined,
    temps16: undefined,
    temps17: undefined,
    temps18: undefined,
    temps19: undefined,
    temps20: undefined,
    temps21: undefined,
    temps22: undefined,
    temps23: undefined,
    temps24: undefined,
    desc1: undefined,
    desc2: undefined,
    desc3: undefined,
    desc4: undefined,
    desc5: undefined,
    desc6: undefined,
    desc7: undefined,
    desc8: undefined,
    desc9: undefined,
    desc10: undefined,
    desc11: undefined,
    desc12: undefined,
    desc13: undefined,
    desc14: undefined,
    desc15: undefined,
    desc16: undefined,
    desc17: undefined,
    desc18: undefined,
    desc19: undefined,
    desc20: undefined,
    desc21: undefined,
    desc22: undefined,
    desc23: undefined,
    desc24: undefined,
    time1: undefined,
    time2: undefined,
    time3: undefined,
    time4: undefined,
    time5: undefined,
    time6: undefined,
    time7: undefined,
    time8: undefined,
    time9: undefined,
    time10: undefined,
    time11: undefined,
    time12: undefined,
    time13: undefined,
    time14: undefined,
    time15: undefined,
    time16: undefined,
    time17: undefined,
    time18: undefined,
    time19: undefined,
    time20: undefined,
    time21: undefined,
    time22: undefined,
    time23: undefined,
    time24: undefined,
    error: undefined
  }

  

  getWeather = async (e) => {
    e.preventDefault();
    
    const lati = e.target.elements.lat.value;
    const long = e.target.elements.long.value;
    //calling google geolocation api
const api_call_2 = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lati},${long}&key=AIzaSyCO9wvfXjzjXMpzcevukwiunZkuySsCZzU`, {
  method : "POST",
}); 
   const data2 = await api_call_2.json();
   let spldata = (data2.plus_code.compound_code);
   let splarray = spldata.split(" ");
   const country = splarray[splarray.length-1];
   let ctrim = splarray[splarray.length-2];
   const city = ctrim.substring(0, ctrim.length - 1);
   
    //calling weather api
const api_2 = await fetch(`https://cors-anywhere.herokuapp.com/https://weather.api.here.com/weather/1.0/report.json?app_id=V0Dj4Lxq58PC6rB3kMGN&app_code=dFsl8rq5JQeQt6cgAyB18A&product=observation&name=${city}
`,{
 method : "GET",
//  credentials:"same-origin",
//  mode : "no-cors"
});
const out = await api_2.json();
const api_dhour = await fetch(`https://cors-anywhere.herokuapp.com/https://weather.api.here.com/weather/1.0/report.json?app_id=V0Dj4Lxq58PC6rB3kMGN&app_code=dFsl8rq5JQeQt6cgAyB18A&product=forecast_hourly&name=${city}
`,{
 method : "GET",
//  credentials:"same-origin",
//  mode : "no-cors"
});
const out2 = await api_dhour.json();
const api_daily = await fetch(`https://cors-anywhere.herokuapp.com/https://weather.api.here.com/weather/1.0/report.json?product=forecast_7days_simple&name=${city}&app_id=V0Dj4Lxq58PC6rB3kMGN&app_code=dFsl8rq5JQeQt6cgAyB18A
`,{
 method : "GET",
//  credentials:"same-origin",
//  mode : "no-cors"
});
const out3 = await api_daily.json();
const api_sun = await fetch(`https://cors-anywhere.herokuapp.com/https://weather.api.here.com/weather/1.0/report.json?app_id=V0Dj4Lxq58PC6rB3kMGN&app_code=dFsl8rq5JQeQt6cgAyB18A&product=forecast_astronomy&name=${city}
`,{
 method : "GET",
//  credentials:"same-origin",
//  mode : "no-cors"
});
const out4 = await api_sun.json();
console.log(out);
console.log(out2);
console.log(out3);
console.log(out4);
    if (city && country){

      console.log(data2);
      this.setState({
        temperature: Math.round(parseFloat(out.observations.location[0].observation[0].temperature)),
        city: city,
        country: country,
        humidity: out.observations.location[0].observation[0].humidity,
        icon: out.observations.location[0].observation[0].iconLink,
        description: out.observations.location[0].observation[0].iconName,
        daylight:out.observations.location[0].observation[0].daylight,
        hightemp: Math.round(parseFloat(out.observations.location[0].observation[0].highTemperature)),
        lowtemp: Math.round(parseFloat(out.observations.location[0].observation[0].lowTemperature)),
        windspeed: parseFloat(out.observations.location[0].observation[0].windSpeed),
        winddir: out.observations.location[0].observation[0].windDescShort,
        visibility: parseFloat(out.observations.location[0].observation[0].distance),
        sunrise: out4.astronomy.astronomy[0].sunrise,
        sunset:out4.astronomy.astronomy[0].sunset,
        pressure: out.observations.location[0].observation[0].barometerPressure,
        precipitation: parseFloat(out2.hourlyForecasts.forecastLocation.forecast[0].precipitationProbability),
        latit: lati,
        longit: long,
        cof:out2.hourlyForecasts.forecastLocation.forecast[0].rainFall,
        temp1: Math.round((parseFloat(out3.dailyForecasts.forecastLocation.forecast[0].highTemperature)+parseFloat(out3.dailyForecasts.forecastLocation.forecast[0].lowTemperature))/2),
        temp2: Math.round((parseFloat(out3.dailyForecasts.forecastLocation.forecast[1].highTemperature)+parseFloat(out3.dailyForecasts.forecastLocation.forecast[1].lowTemperature))/2),
        temp3: Math.round((parseFloat(out3.dailyForecasts.forecastLocation.forecast[2].highTemperature)+parseFloat(out3.dailyForecasts.forecastLocation.forecast[2].lowTemperature))/2),
        temp4:  Math.round((parseFloat(out3.dailyForecasts.forecastLocation.forecast[3].highTemperature)+parseFloat(out3.dailyForecasts.forecastLocation.forecast[3].lowTemperature))/2),
        temp5: Math.round((parseFloat(out3.dailyForecasts.forecastLocation.forecast[4].highTemperature)+parseFloat(out3.dailyForecasts.forecastLocation.forecast[4].lowTemperature))/2),
        dayn1: out3.dailyForecasts.forecastLocation.forecast[0].weekday,
        dayn2: out3.dailyForecasts.forecastLocation.forecast[1].weekday,
        dayn3: out3.dailyForecasts.forecastLocation.forecast[2].weekday,
        dayn4: out3.dailyForecasts.forecastLocation.forecast[3].weekday,
        dayn5: out3.dailyForecasts.forecastLocation.forecast[4].weekday,
        des1: out3.dailyForecasts.forecastLocation.forecast[0].iconName,
        des2: out3.dailyForecasts.forecastLocation.forecast[1].iconName,
        des3: out3.dailyForecasts.forecastLocation.forecast[2].iconName,
        des4: out3.dailyForecasts.forecastLocation.forecast[3].iconName,
        des5: out3.dailyForecasts.forecastLocation.forecast[4].iconName,
        wind1: parseFloat(out3.dailyForecasts.forecastLocation.forecast[0].windSpeed),
        wind2: parseFloat(out3.dailyForecasts.forecastLocation.forecast[1].windSpeed),
        wind3: parseFloat(out3.dailyForecasts.forecastLocation.forecast[2].windSpeed),
        wind4: parseFloat(out3.dailyForecasts.forecastLocation.forecast[3].windSpeed),
        wind5: parseFloat(out3.dailyForecasts.forecastLocation.forecast[4].windSpeed),
        cof1: parseFloat(out3.dailyForecasts.forecastLocation.forecast[0].rainFall)*100,
        cof2: parseFloat(out3.dailyForecasts.forecastLocation.forecast[1].rainFall)*100,
        cof3: parseFloat(out3.dailyForecasts.forecastLocation.forecast[2].rainFall)*100,
        cof4: parseFloat(out3.dailyForecasts.forecastLocation.forecast[3].rainFall)*100,
        cof5: parseFloat(out3.dailyForecasts.forecastLocation.forecast[4].rainFall)*100,
        temps1: out2.hourlyForecasts.forecastLocation.forecast[0].temperature,
        temps2: out2.hourlyForecasts.forecastLocation.forecast[1].temperature,
        temps3: out2.hourlyForecasts.forecastLocation.forecast[2].temperature,
        temps4: out2.hourlyForecasts.forecastLocation.forecast[3].temperature,
        temps5: out2.hourlyForecasts.forecastLocation.forecast[4].temperature,
        temps6: out2.hourlyForecasts.forecastLocation.forecast[5].temperature,
        temps7: out2.hourlyForecasts.forecastLocation.forecast[6].temperature,
        temps8: out2.hourlyForecasts.forecastLocation.forecast[7].temperature,
        temps9: out2.hourlyForecasts.forecastLocation.forecast[8].temperature,
        temps10: out2.hourlyForecasts.forecastLocation.forecast[9].temperature,
        temps11: out2.hourlyForecasts.forecastLocation.forecast[10].temperature,
        temps12: out2.hourlyForecasts.forecastLocation.forecast[11].temperature,
        temps13: out2.hourlyForecasts.forecastLocation.forecast[12].temperature,
        temps14: out2.hourlyForecasts.forecastLocation.forecast[13].temperature,
        temps15: out2.hourlyForecasts.forecastLocation.forecast[14].temperature,
        temps16: out2.hourlyForecasts.forecastLocation.forecast[15].temperature,
        temps17: out2.hourlyForecasts.forecastLocation.forecast[16].temperature,
        temps18: out2.hourlyForecasts.forecastLocation.forecast[17].temperature,
        temps19: out2.hourlyForecasts.forecastLocation.forecast[18].temperature,
        temps20: out2.hourlyForecasts.forecastLocation.forecast[19].temperature,
        temps21: out2.hourlyForecasts.forecastLocation.forecast[20].temperature,
        temps22: out2.hourlyForecasts.forecastLocation.forecast[21].temperature,
        temps23: out2.hourlyForecasts.forecastLocation.forecast[22].temperature,
        temps24: out2.hourlyForecasts.forecastLocation.forecast[23].temperature,
        desc1: out2.hourlyForecasts.forecastLocation.forecast[0].iconName,
        desc2: out2.hourlyForecasts.forecastLocation.forecast[1].iconName,
        desc3: out2.hourlyForecasts.forecastLocation.forecast[2].iconName,
        desc4: out2.hourlyForecasts.forecastLocation.forecast[3].iconName,
        desc5: out2.hourlyForecasts.forecastLocation.forecast[4].iconName,
        desc6: out2.hourlyForecasts.forecastLocation.forecast[5].iconName,
        desc7: out2.hourlyForecasts.forecastLocation.forecast[6].iconName,
        desc8: out2.hourlyForecasts.forecastLocation.forecast[7].iconName,
        desc9: out2.hourlyForecasts.forecastLocation.forecast[8].iconName,
        desc10: out2.hourlyForecasts.forecastLocation.forecast[9].iconName,
        desc11: out2.hourlyForecasts.forecastLocation.forecast[10].iconName,
        desc12: out2.hourlyForecasts.forecastLocation.forecast[11].iconName,
        desc13: out2.hourlyForecasts.forecastLocation.forecast[12].iconName,
        desc14: out2.hourlyForecasts.forecastLocation.forecast[13].iconName,
        desc15: out2.hourlyForecasts.forecastLocation.forecast[14].iconName,
        desc16: out2.hourlyForecasts.forecastLocation.forecast[15].iconName,
        desc17: out2.hourlyForecasts.forecastLocation.forecast[16].iconName,
        desc18: out2.hourlyForecasts.forecastLocation.forecast[17].iconName,
        desc19: out2.hourlyForecasts.forecastLocation.forecast[18].iconName,
        desc20: out2.hourlyForecasts.forecastLocation.forecast[19].iconName,
        desc21: out2.hourlyForecasts.forecastLocation.forecast[20].iconName,
        desc22: out2.hourlyForecasts.forecastLocation.forecast[21].iconName,
        desc23: out2.hourlyForecasts.forecastLocation.forecast[22].iconName,
        desc24: out2.hourlyForecasts.forecastLocation.forecast[23].iconName,
        time1: parseInt(out2.hourlyForecasts.forecastLocation.forecast[0].localTime.substring(0,2)),
        time2: parseInt(out2.hourlyForecasts.forecastLocation.forecast[1].localTime.substring(0,2)),
        time3: parseInt(out2.hourlyForecasts.forecastLocation.forecast[2].localTime.substring(0,2)),
        time4: parseInt(out2.hourlyForecasts.forecastLocation.forecast[3].localTime.substring(0,2)),
        time5: parseInt(out2.hourlyForecasts.forecastLocation.forecast[4].localTime.substring(0,2)),
        time6: parseInt(out2.hourlyForecasts.forecastLocation.forecast[5].localTime.substring(0,2)),
        time7: parseInt(out2.hourlyForecasts.forecastLocation.forecast[6].localTime.substring(0,2)),
        time8: parseInt(out2.hourlyForecasts.forecastLocation.forecast[7].localTime.substring(0,2)),
        time9: parseInt(out2.hourlyForecasts.forecastLocation.forecast[8].localTime.substring(0,2)),
        time10: parseInt(out2.hourlyForecasts.forecastLocation.forecast[9].localTime.substring(0,2)),
        time11: parseInt(out2.hourlyForecasts.forecastLocation.forecast[10].localTime.substring(0,2)),
        time12: parseInt(out2.hourlyForecasts.forecastLocation.forecast[11].localTime.substring(0,2)),
        time13: parseInt(out2.hourlyForecasts.forecastLocation.forecast[12].localTime.substring(0,2)),
        time14: parseInt(out2.hourlyForecasts.forecastLocation.forecast[13].localTime.substring(0,2)),
        time15: parseInt(out2.hourlyForecasts.forecastLocation.forecast[14].localTime.substring(0,2)),
        time16: parseInt(out2.hourlyForecasts.forecastLocation.forecast[15].localTime.substring(0,2)),
        time17: parseInt(out2.hourlyForecasts.forecastLocation.forecast[16].localTime.substring(0,2)),
        time18: parseInt(out2.hourlyForecasts.forecastLocation.forecast[17].localTime.substring(0,2)),
        time19: parseInt(out2.hourlyForecasts.forecastLocation.forecast[18].localTime.substring(0,2)),
        time20: parseInt(out2.hourlyForecasts.forecastLocation.forecast[19].localTime.substring(0,2)),
        time21: parseInt(out2.hourlyForecasts.forecastLocation.forecast[20].localTime.substring(0,2)),
        time22: parseInt(out2.hourlyForecasts.forecastLocation.forecast[21].localTime.substring(0,2)),
        time23: parseInt(out2.hourlyForecasts.forecastLocation.forecast[22].localTime.substring(0,2)),
        time24: parseInt(out2.hourlyForecasts.forecastLocation.forecast[23].localTime.substring(0,2)),
        error: ""
    });
    if(this.state.cof==="*"){
      this.setState({
        cof: 0
      })
    }
    else{
      this.setState({
        cof: parseFloat(out2.hourlyForecasts.forecastLocation.forecast[0].rainFall)*100
      })
    }
    if(this.state.latit===undefined){
      this.setState({
        latit: lati,
      })
    }
    if(this.state.longit===undefined){
      this.setState({
        longit: long,
      })
    }
  }
  }
  


  render() {
    
    return (<div className="grid-container">
        <Temperature
        className = "Temperature"
        temperature={this.state.temperature}
        hightemp={this.state.hightemp}
        lowtemp={this.state.lowtemp}
        description={this.state.description}/>
        <Icon 
        className="Icon"
        description={this.state.description}
        icon={this.state.icon}/>
        <Location
          className = "Location"
          getLocation={this.getWeather}
          cityname={this.state.city}
          countryname={this.state.country}/>
        <WarningInfo 
        className = "WarningInfo"
        lati={this.state.latit}
        longi={this.state.longit}
        city={this.state.city}
        windSpeed= {this.state.windspeed}
        visibility={this.state.visibility}
        cof={this.state.precipitation}
        />
        <HighInfo 
          className = "HighInfo"
          windspeed={this.state.windspeed}
          winddir={this.state.winddir}
          visibility={this.state.visibility}
          cof = {this.state.cof}
          precipitation={this.state.precipitation}/>
        <Slider
        className ="Slider"
        temps1={this.state.temps1}
        temps2={this.state.temps2}
        temps3={this.state.temps3}
        temps4={this.state.temps4}
        temps5={this.state.temps5}
        temps6={this.state.temps6}
        temps7={this.state.temps7}
        temps8={this.state.temps8}
        temps9={this.state.temps9}
        temps10={this.state.temps10}
        temps11={this.state.temps11}
        temps12={this.state.temps12}
        temps13={this.state.temps13}
        temps14={this.state.temps14}
        temps15={this.state.temps15}
        temps16={this.state.temps16}
        temps17={this.state.temps17}
        temps18={this.state.temps18}
        temps19={this.state.temps19}
        temps20={this.state.temps20}
        temps21={this.state.temps21}
        temps22={this.state.temps22}
        temps23={this.state.temps23}
        temps24={this.state.temps24}
        desc1={this.state.desc1}
        desc2={this.state.desc2}
        desc3={this.state.desc3}
        desc4={this.state.desc4}
        desc5={this.state.desc5}
        desc6={this.state.desc6}
        desc7={this.state.desc7}
        desc8={this.state.desc8}
        desc9={this.state.desc9}
        desc10={this.state.desc10}
        desc11={this.state.desc11}
        desc12={this.state.desc12}
        desc13={this.state.desc13}
        desc14={this.state.desc14}
        desc15={this.state.desc15}
        desc16={this.state.desc16}
        desc17={this.state.desc17}
        desc18={this.state.desc18}
        desc19={this.state.desc19}
        desc20={this.state.desc20}
        desc21={this.state.desc21}
        desc22={this.state.desc22}
        desc23={this.state.desc23}
        desc24={this.state.desc24}
        time1= {this.state.time1}
        time2= {this.state.time2}
        time3= {this.state.time3}
        time4= {this.state.time4}
        time5= {this.state.time5}
        time6= {this.state.time6}
        time7= {this.state.time7}
        time8= {this.state.time8}
        time9= {this.state.time9}
        time10= {this.state.time10}
        time11= {this.state.time11}
        time12= {this.state.time12}
        time13= {this.state.time13}
        time14= {this.state.time14}
        time15= {this.state.time15}
        time16= {this.state.time16}
        time17= {this.state.time17}
        time18= {this.state.time18}
        time19= {this.state.time19}
        time20= {this.state.time20}
        time21= {this.state.time21}
        time22= {this.state.time22}
        time23= {this.state.time23}
        time24= {this.state.time24}
        />
        <LaterDays 
        className="LaterDays"
        temp1={this.state.temp1}
        temp2={this.state.temp2}
        temp3={this.state.temp3}
        temp4={this.state.temp4}
        temp5={this.state.temp5}
        day1={this.state.dayn1}
        day2={this.state.dayn2}
        day3={this.state.dayn3}
        day4={this.state.dayn4}
        day5={this.state.dayn5}
        des1={this.state.des1}
        des2={this.state.des2}
        des3={this.state.des3}
        des4={this.state.des4}
        des5={this.state.des5}
        wind1 = {this.state.wind1}
        wind2 = {this.state.wind2}
        wind3 = {this.state.wind3}
        wind4 = {this.state.wind4}
        wind5 = {this.state.wind5}
        cof1 = {this.state.cof1}
        cof2 = {this.state.cof2}
        cof3 = {this.state.cof3}
        cof4 = {this.state.cof4}
        cof5 = {this.state.cof5}/>
        
        <Sun 
        className = "Sun"
        description={this.state.description}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        daylight={this.state.daylight}
        />
        <LowInfo
        className = "LowInfo"
        humidity={this.state.humidity}
        pressure={this.state.pressure}
         />
     </div>
    );
  }
}

export default App;
