import React, {Component} from 'react';
import './style.css'
import location from '../Images/Normal_icons/location.svg';
class Location extends Component{
  //this class is responsible for getting the location and displaying it
  render (){
    const gSpot = (e) => {
      e.preventDefault();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        console.log = "Geolocation is not supported by this browser.";
      }
    }
    const showPosition = (position) => {
      document.getElementsByName('lat')[0].value = position.coords.latitude ; 
      document.getElementsByName('long')[0].value =position.coords.longitude;
      document.getElementById('clickButton').click();
    }
    window.onload = gSpot;
    let d = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const zero_p = (val) =>{
      let tm = val;
      if(val<10){
        tm = "0"+val;
        return tm;
      }
      else{
        return tm;
      }
    }
let f_date = d.getDate() + " " + months[d.getMonth()] +" "+ d.getFullYear() + " " + days[d.getDay()] + " " + zero_p(d.getHours()) + ":" + zero_p(d.getMinutes());
let name = this.props.cityname + ", " + this.props.countryname;
    return (
      <div className="Location">
          <form onSubmit={this.props.getLocation}>
          <input name="lat"/>
          <input name="long"/>
          <button id="clickButton">Get weather</button>
          </form>
          <img className="LocationImg" src={location} alt="img"></img>
          <h2>{this.props.cityname&& this.props.countryname &&name}</h2>
          <p>{f_date}</p>
      </div>
    )
  
  }

}

export default Location;