import React, {Component} from 'react';
import Information from './Information.js';
import './style.css';
import PressureImg from '../Images/Normal_icons/pressure.svg'
import HumidityImg from '../Images/Normal_icons/humidity (1).svg'

class LowInfo extends Component{
//this class is responsible for displaying information like Humidity and Pressure
  render (){
  let pressure = Math.round(parseFloat(this.props.pressure))+ " hPa";
  let humidity = this.props.humidity + "%";
    return (
      <div className="LowInfo">
        <Information className="Pressure" name="Pressure" percent={this.props.pressure &&pressure} img={PressureImg}/>
        <Information className="Humidity" name="Humidity" percent={this.props.humidity && humidity} img={HumidityImg}/>   
      </div>
    )
  
  }

}

export default LowInfo;