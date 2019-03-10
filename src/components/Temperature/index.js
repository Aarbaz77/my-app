import React, {Component} from 'react';
import './style.css'

class Temperature extends Component{
  render (){
    //this class displays the main temperature and the type of weather
    const icony = (e) => {
      if(e==="sunny" || e==="mostly_sunny" || e==="clear"){

        return  "Clear";
      }
      else if(e === "Heavy Rain"){
     
        return "Heavy Rain";
      }    
      else if(e==="cloudy"||e==="mostly_cloudy"||e==="high_clouds"){
   
        return "Clouds";
      }
      else if(e==="sprinkles"||e==="showers"||e==="light_rain"||e==="night_sprinkles"||e==="rain"){
     
        return "Light Rain";
      }
      else if(e==="partly_cloudy"){
      
        return "Partly Cloudy";
      }
      else if(e==="night_mostly_clear"||e==="night_clear"){
        
        return "Clear";
      }
      else if(e==="night_partly_cloudy"||e==="night_mostly_cloudy"){
       
        return "Partly Cloudy";
      }
      else if(e==="light_snow"||e==="heavy_snow"||e==="snow_rain_mix"){
        
        return "Snow";
      }
    }
    let descrip = this.props.description;
    let temperature =this.props.temperature+ "°C";
    let description = icony(descrip);  
    let high = this.props.hightemp+"°C";
    let low = this.props.lowtemp+"°C";
    return (
      <div className="Temperature">
          <h1>{this.props.temperature&&temperature}</h1>
          <p>H: {this.props.hightemp&&high} / L: {this.props.lowtemp&&low}</p>
          <h2>{description}</h2>
      </div>
    )
  
  }

}

export default Temperature;
