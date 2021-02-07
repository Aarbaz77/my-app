import React, {Component} from 'react';
import './style.css';
import Dialog from '../Dialog';
import location from '../Images/Normal_icons/location.svg';
class Location extends Component{
  state = {
    isOpen:false,
  }

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
          <img className="LocationImg" src={location} alt="img" onClick={
            (e) => this.setState({ isOpen: true })
          }>
          </img>
          <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
          <div style={{ height: '50vh', width: '100%' }}>
          <form>
          <input type="text" name="city"/>
          <input type = "text"name="country"/>
          <button id="clickButtoncity">Get weather</button>
          </form>
          </div>

          </Dialog>
          <h2>{this.props.cityname&& this.props.countryname &&name}</h2>
          <p>{f_date}</p>
      </div>
    )

  }

}

export default Location;
