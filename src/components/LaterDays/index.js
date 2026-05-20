import React, {Component} from 'react';
import Days from './Days.js';
import './style.css'
import Cloudy from '../Images/Weather_Icons/Cloudy.png';
import Sun from '../Images/Weather_Icons/Sun.png';
import Heavy_Rain from '../Images/Weather_Icons/Heavy_Rain.png';
import Light_Rain from '../Images/Weather_Icons/Light_Rain.png';
import Moon from '../Images/Weather_Icons/Moon.png';
import Snow from '../Images/Weather_Icons/Snow.png';
import PartlyCloudyMoon from '../Images/Weather_Icons/PartlyCloudyMoon.png';
import PartlyCloudySunny from '../Images/Weather_Icons/PartlyCloudySunny.png';
import Green from '../Images/Warning/Green_Warning.png';
import Yellow from '../Images/Warning/Warning.png';
import Red from '../Images/Warning/Red_Warning.png';

class LaterDays extends Component{
  //this class renders all the information for the next 5 days 
  render (){
    let icony = (e) => {
      if(e==="sunny" || e==="mostly_sunny" || e==="clear"){
       return(Sun);
      }
      else if(e === "Heavy Rain"){
        return(Heavy_Rain);
      }    
      else if(e==="cloudy"||e==="mostly_cloudy"||e==="high_clouds"){
        return(Cloudy);
      }
      else if(e==="sprinkles"||e==="showers"||e==="light_rain"||e==="night_sprinkles"||e==="rain"){
        return(Light_Rain);
      }
      else if(e==="partly_cloudy"){
        return(PartlyCloudySunny);
      }
      else if(e==="night_mostly_clear"||e==="night_clear"){
        return(Moon);
      }
      else if(e==="night_partly_cloudy"){
        return(PartlyCloudyMoon);
      }
      else if(e==="light_snow"||e==="heavy_snow"||e==="snow_rain_mix"){
        return(Snow);
      }
      else{
        return(Sun);
      }
    }

    const warning=(cof, windspeed)=>{
      let retf = new Array(2);
      if(cof>70 && windspeed>30){
        retf[0] = Red;
        return retf;    
      }
      else if(windspeed>30){
        retf[0]=Yellow; 
        return retf;     
      }
      else{
        retf[0] = Green;
        return retf;  
      }
    }

    const dailyForecasts = this.props.dailyForecasts || [];

    const classNameMap = ["DayOne", "DayTwo", "DayThree", "DayFour", "DayFive"];

    return (
      <div className={this.props.className || "LaterDays"}>
        {dailyForecasts.map((f, i) => (
          <Days 
            key={i} 
            className={classNameMap[i]} 
            day={f.day} 
            temp={f.temp} 
            img={icony(f.desc)} 
            sign={warning(f.cof, f.wind)[0]}/>
        ))}
      </div>
    )
  }
}

export default LaterDays;