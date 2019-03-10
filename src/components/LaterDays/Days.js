import React, {Component} from 'react';
import './style.css'


class Days extends Component{
    render (){
      return (
            <div>
                <img className="WarningImg1" src={this.props.sign} alt="img"></img>
                <h5>{this.props.day}</h5>
                <img className="WeatherImg1" id="new" src={this.props.img} alt="img"></img>
                <p>{this.props.temp}°C</p>
            </div>
            )
    }

}

export default Days;