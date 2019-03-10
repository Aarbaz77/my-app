import React, {Component} from 'react';
import './style.css';
import Cloudy from '../Images/Weather_Icons/Cloudy.png';
import Sun from '../Images/Weather_Icons/Sun.png';
import Heavy_Rain from '../Images/Weather_Icons/Heavy_Rain.png';
import Light_Rain from '../Images/Weather_Icons/Light_Rain.png';
import Moon from '../Images/Weather_Icons/Moon.png';
import Snow from '../Images/Weather_Icons/Snow.png';
import PartlyCloudyMoon from '../Images/Weather_Icons/PartlyCloudyMoon.png';
import PartlyCloudySunny from '../Images/Weather_Icons/PartlyCloudySunny.png';

class Icon extends Component{
  //this class renders the main icon depending on the type of weather
  render (){
    let descrip = this.props.description;
    const icony = (e) => {
      if(e==="sunny" || e==="mostly_sunny" || e==="clear"){

        return  Sun;
      }
      else if(e === "Heavy Rain"){
     
        return Heavy_Rain;
      }    
      else if(e==="cloudy"||e==="mostly_cloudy"||e==="high_clouds"){
   
        return Cloudy;
      }
      else if(e==="sprinkles"||e==="showers"||e==="light_rain"||e==="night_sprinkles"||e==="rain"){
     
        return Light_Rain;
      }
      else if(e==="partly_cloudy"){
      
        return PartlyCloudySunny;
      }
      else if(e==="night_mostly_clear"||e==="night_clear"){
        
        return Moon;
      }
      else if(e==="night_partly_cloudy"||e==="night_mostly_cloudy"){
       
        return PartlyCloudyMoon;
      }
      else if(e==="light_snow"||e==="heavy_snow"||e==="snow_rain_mix"){
        
        return Snow;
      }
      else{
        return Sun;
      }
    }
   
    let description = icony(descrip);  
    
    return (
      <div className="Icon">
         <img className="IconImg" src={description} alt={Sun}></img>
         
      </div>
    )
  
  }

}

export default Icon;