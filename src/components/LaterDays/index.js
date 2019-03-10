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
    let desc1 = icony(this.props.des1);
    let desc2 = icony(this.props.des2);
    let desc3 = icony(this.props.des3);
    let desc4 = icony(this.props.des4);
    let desc5 = icony(this.props.des5);
    const warning=(cof, windspeed)=>{
      let retf = new Array(2);
      if(cof>70 && windspeed>30){
        retf[0] = Red;;
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
    let sign1= warning(this.props.cof1, this.props.wind1)[0];
let sign2= warning(this.props.cof2, this.props.wind2)[0];
let sign3= warning(this.props.cof3, this.props.wind3)[0];
let sign4= warning(this.props.cof4, this.props.wind4)[0];
let sign5= warning(this.props.cof5, this.props.wind5)[0];
    return (
      <div className="LaterDays">
        <Days className="DayOne" day={this.props.day1} temp={this.props.temp1} img={desc1} sign={sign1}/>
        <Days className="DayTwo" day={this.props.day2} temp={this.props.temp2}img={desc2}sign={sign2}/>
        <Days className="DayThree" day={this.props.day3} temp={this.props.temp3}img={desc3}sign={sign3}/>
        <Days className="DayFour" day={this.props.day4} temp={this.props.temp4}img={desc4}sign={sign4}/>
        <Days className="DayFive" day={this.props.day5} temp={this.props.temp5}img={desc5}sign={sign5}/>
      </div>
    )
  
  }

}

export default LaterDays;