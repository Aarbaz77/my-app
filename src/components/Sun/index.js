import React, {Component} from 'react';
import './style.css';
import Sunriseimg from '../Images/Normal_icons/Sunrise.png';
import Sunsetimg from '../Images/Normal_icons/Sunset.png';
import Background from '../Images/Backgrounds/Day.jpg';
import Night from '../Images/Backgrounds/Night.jpg';
import Cloud_Day from '../Images/Backgrounds/Cloud_Day.jpg';
import Cloud_Night from '../Images/Backgrounds/Cloud_Night.jpg';

class Sun extends Component{
  //this class renders the type of background the app is going to have and also the time of sunrise and sunset
  render (){
    const bgcall = (e) => {
      if(this.props.sunset===undefined && this.props.sunrise===undefined){
        return "";
      }
      else{
        const night=(e)=>{
          if(e==="night_mostly_clear"||e==="night_clear"||e==="night_partly_cloudy"){
            document.body.style.backgroundImage = `url(${Night})`;      
          return "";
          }
          else if(e==="sprinkles"||e==="showers"||e==="light_rain"||e==="night_sprinkles"||e==="rain"||e==="night_mostly_cloudy"||e==="cloudy"||e==="mostly_cloudy"||e==="high_clouds"||e==="light_snow"||e==="heavy_snow"||e==="snow_rain_mix"||e==="night_mostly_cloudy"){
              document.body.style.backgroundImage = `url(${Cloud_Night})`;          
            return "";
          }
          else{
            document.body.style.backgroundImage = `url(${Night})`;
          return "";
          }
        }
        const day=(e)=>{
          if(e==="sunny" || e==="mostly_sunny" || e==="clear"||e==="partly_cloudy"){
            document.body.style.backgroundImage = `url(${Background})`;
         
          return "";
          }
          else if(e==="cloudy"||e==="mostly_cloudy"||e==="high_clouds"||e==="sprinkles"||e==="showers"||e==="light_rain"||e==="rain"||e==="light_snow"||e==="heavy_snow"||e==="snow_rain_mix"){
              document.body.style.backgroundImage = `url(${Cloud_Day})`;
        
            return "";
          }
          else{
            document.body.style.backgroundImage = `url(${Background})`;

          }
        }
  
      let e = this.props.description;
      let daylight = this.props.daylight;
      if(daylight==="N"){

        return night(e);
      }
      else if(daylight==="D"){

        return day(e); 
      } 
    }
  }
  let calli = bgcall();
    return (
      <div className="Sun">
        <div className="SunRise">
          <h3>Sunrise</h3>
          <img className="SunRiseImg" src={Sunriseimg} alt="SunRise"></img> 
          <p>{this.props.sunrise}</p>
        </div>
        <div className="SunSet">
          <h3>Sunset</h3>
          <img className="SunSetImg" src={Sunsetimg} alt="SunSet"></img>
          <p>{this.props.sunset}{calli}
          </p>  
        </div> 
      </div>
    )
  
  }

}

export default Sun;