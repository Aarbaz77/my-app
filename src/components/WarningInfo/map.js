import React, {Component} from 'react';
// import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    fetchPlaces(mapProps, map) {
        // const {google} = mapProps;
        // const trafficLayer = new google.maps.TrafficLayer(map);
        // trafficLayer.setMap(map);
      }
  render() {
    const style = {
      height: '40vh',
      width: '43vh',
      position: 'relative',
      display: 'inline-block',
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: '25px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
      let lati = this.props.lati;
      let longi = this.props.longi;

    return (
      <div style={style}>
        <p>Map Placeholder</p>
        {/* 
        <Map google={this.props.google}
          style={style}
          initialCenter={{
            lat: lati,
            lng: longi
          }}
          onReady={this.fetchPlaces}
          zoom={16}
          onClick={this.onMapClicked}>
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
        </Map>
        */}
      </div>
    );
  }
}

export default MapContainer;
// export default GoogleApiWrapper({
//   apiKey: (`AIzaSyCO9wvfXjzjXMpzcevukwiunZkuySsCZzU`)
// })(MapContainer)
