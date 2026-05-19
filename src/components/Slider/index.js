import React, {Component} from 'react';
import './style.css'
import Hours from './Hours'
/*<input className="Slide" type="range" min="1" max="100" value="50" id="myRange"></input>*/

class Slider extends Component{
//this class renders all the weather information for 24 hours 
  render (){
    const forecasts = this.props.hourlyForecasts || [];

    return (
      <div className="Slider">
        {forecasts.map((f, i) => (
          <Hours key={i} ClassName={`hours${i+1}`} time={f.time} temp={f.temp} conditions={f.desc}/>
        ))}
      </div>
    )
  
  }

}

export default Slider;
