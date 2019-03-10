import React, {Component} from 'react';
import Information from './Information.js'
import './style.css';
import COF from '../Images/Normal_icons/COF.png'
import Precipitation from '../Images/Normal_icons/Precipitation.png'
import wind from '../Images/Normal_icons/wind.png'
import visibility from '../Images/Normal_icons/visibility.svg'

class HighInfo extends Component{
//this class displays all the information regarding windspeed, visibility, chance of rain and precipitation
  render (){
    let windinfo = Math.round(this.props.windspeed) +" km/h\n"+ this.props.winddir;
    let visibilitydes = Math.round(this.props.visibility) + " km";
    let precipitationdes = this.props.precipitation + "%";
    let cofdes = this.props.cof + "%";
    return (
      <div className="HighInfo">
        <Information class="Visibility" name="Visibility" percent={this.props.visibility && visibilitydes} img={visibility}/>
        <Information class="WindSpeed" name="Wind Speed" percent={this.props.windspeed && windinfo} img={wind}/>
        <Information class="Precipitation" name="Precipitation" percent={this.props.precipitation && precipitationdes} img={Precipitation}/>
        <Information class="ChanceOfRain" name="Chance Of Rain" percent={this.props.cof && cofdes} img={COF}/>
      </div>
    ) 
  }
}

export default HighInfo;