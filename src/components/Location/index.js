import React, {Component} from 'react';
import './style.css';
import Dialog from '../Dialog';
import location from '../Images/Normal_icons/location.svg';

class Location extends Component{
  state = {
    isOpen:false,
    cityInput: "",
    suggestions: []
  }

  debounceTimeout = null;

  fetchSuggestions = async (query) => {
    if (!query) {
      this.setState({ suggestions: [] });
      return;
    }
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5&featuretype=city`);
      const data = await res.json();
      this.setState({ suggestions: data });
    } catch (e) {
      console.error(e);
    }
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ cityInput: value });
    
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    
    this.debounceTimeout = setTimeout(() => {
      this.fetchSuggestions(value);
    }, 300);
  }

  handleSuggestionClick = (suggestion) => {
    // Fill input and close suggestions
    this.setState({ cityInput: suggestion.display_name, suggestions: [] });
  }

  handleCitySubmit = (e) => {
    e.preventDefault();
    // The App.js expects e.target.elements.city.value
    const fakeEvent = {
      preventDefault: () => {},
      target: {
        elements: {
          city: { value: this.state.cityInput },
          country: { value: "" }
        }
      }
    };
    this.props.getWeatherByCity(fakeEvent);
    this.setState({ isOpen: false });
  }

  showPosition = (position) => {
    const latEl = document.getElementsByName('lat')[0];
    const longEl = document.getElementsByName('long')[0];
    const btn = document.getElementById('clickButton');
    if(latEl && longEl && btn) {
      latEl.value = position.coords.latitude;
      longEl.value = position.coords.longitude;
      btn.click();
    }
  }

  gSpot = (e) => {
    if(e) e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  componentDidMount() {
    this.gSpot();
  }

  handleCurrentLocation = (e) => {
    e.preventDefault();
    this.gSpot();
    this.setState({ isOpen: false });
  }

  //this class is responsible for getting the location and displaying it
  render (){
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
            (e) => this.setState({ isOpen: true, cityInput: "", suggestions: [] })
          }>
          </img>
          <Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
            <div className="SearchContainer">
              <h2>Search City</h2>
              <form className="SearchForm" onSubmit={this.handleCitySubmit}>
                <div className="AutocompleteWrapper">
                  <input 
                    type="text" 
                    name="city" 
                    className="SearchInput"
                    placeholder="Enter city name..."
                    autoComplete="off"
                    value={this.state.cityInput}
                    onChange={this.handleInputChange}
                  />
                  {this.state.suggestions.length > 0 && (
                    <ul className="SuggestionsList">
                      {this.state.suggestions.map((s, idx) => (
                        <li key={idx} onClick={() => this.handleSuggestionClick(s)}>
                          {s.display_name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button type="submit" className="SearchButton">Get weather</button>
                <button type="button" className="CurrentLocationButton" onClick={this.handleCurrentLocation}>Use current location</button>
              </form>
            </div>
          </Dialog>
          <h2>{this.props.cityname && this.props.countryname && name}</h2>
          <p>{f_date}</p>
      </div>
    )
  }
}

export default Location;
