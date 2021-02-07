import React, {Component} from 'react';
import './style.css'
import Dialog from '../Dialog';
import Green from '../Images/Warning/Green_Warning.png';
import Yellow from '../Images/Warning/Warning.png';
import Red from '../Images/Warning/Red_Warning.png';
import MapContainer from './map';

class WarningInfo extends Component{
  //this class displays the weather warning colour and also contains some more information
  state = {
    isOpen:false,
  }

  render (){

    let visibility = this.props.visibility;
    let cof = this.props.cof;
    let windspeed = this.props.windSpeed;
    const warning=(visibility, cof, windspeed)=>{
      let retf = new Array(3);
      let visib = "Due to poor visibility motorcyclists are advised to take extra caution when commuting and everyone else is advised to take extra care while on the road.";
      let chrain = "Due to high chances of rain, motorcyclists are advised to put on extra layers of clothing or wear biker raincoats and everyone else is advised to wear or take rain protective clothing or accessories.";
      let wspeed = "Due to high speeds of wind, motorcyclists are advised to find alternative or safer mode of transport."
      let clothing = "Type of Clothing advised:"
      let acc = "Type of Accessories recommended:"
      if(visibility<10 && cof>70 && windspeed>30){
        retf[0] = Red;
        retf[1] = "Red Warning";
        retf[2] = visib+"\n"+ wspeed+"\n"+chrain +"\n"+clothing + "\n1.Reflective Clothes\n2.Raincoats/Windcheater\n3.Long Boots\n"+ acc +
        "\n1.Umbrella\n2.Snow Chains for Bikers(If Snows)\n3.Biker Lights\n4.Muffler";
        return retf;
      }
      else if(cof>70 && windspeed>30){
        retf[0] = Red;
        retf[1] = "Red Warning";
        retf[2] = chrain+"\n"+wspeed+"\n"+clothing+"\n1.Raincoat/Windcheater\n3.Long Boots\n"+acc+"\n1.Umbrella\n2.Muffler";
        return retf;
      }
      else if(visibility<10 && cof>70){
        retf[0] = Red;
        retf[1] = "Red Warning";
        retf[2] = visib+"\n"+chrain+"\n"+clothing+"\n1.Raincoat/WindCheater\n2.Reflective Clothes\n"+acc+"\n1.Umbrella\n2.Snow Chains for Bikers(If Snows)\n3.Biker Lights";
        return retf;
      }
      else if(visibility<10 && windspeed>30){
        retf[1]="Red Warning";
        retf[0]=Red;
        retf[2] = visib+"\n"+wspeed+"\n"+clothing+"\n1.Raincoat/WindCheater\n2.Reflective Clothing\n"+acc+"\n1.Biker Lights\n2.Muffler";
        return retf;
      }
      else if(visibility<10){
        retf[1]="Yellow Warning";
        retf[0]=Yellow;
        retf[2] = visib+"\n"+clothing+"\n1.Reflective Clothing\n"+acc+"\n1.Biker Lights";
        return retf;
      }
      else if(windspeed>30){
        retf[1]="Yellow Warning";
        retf[0]=Yellow;
        retf[2] = wspeed+"\n"+clothing+"\n1.Raincoat/WindCheater\n"+acc+"\n1.Mufflers";
        return retf;
      }
      else if(cof>70){
        retf[1]="Yellow Warning";
        retf[0]=Yellow;
        retf[2] = chrain+"\n"+clothing+"\n1.Raincoat/WindCheater\n2.Long Boot\n"+acc+"\n1.Umbrella\n2.Snow Chains for Bikers(If Snows)";
        return retf;
      }
      else{
        retf[1] = "Green";
        retf[0] = Green;
        retf[2] = `Everything Seems Great. Enjoy`;
        return retf;
      }
    }

    let sign = warning(visibility, cof, windspeed)[0];
    let sname = warning(visibility, cof, windspeed)[1];
    let message = warning(visibility, cof, windspeed)[2];
    let latitude = this.props.lati;
    let longitude = this.props.longi;

    return (
      <div className="WarningInfo">
          <h2>Warning Information</h2>
            <img className="WarningImg" src={sign} alt="img"></img>
          <h3 className="WarningType">{sname}</h3>
          <div>
          </div>
          <button className="button" onClick={(e) => this.setState({ isOpen: true })}>More Info</button>

            <Dialog
            className='DialogInfo'
            isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
            <div class='MapInfo'>
            <MapContainer 
            lati={latitude}
            longi={longitude}/>
            </div>
            {message}
            </Dialog>
        </div>
    )


  }

}

export default WarningInfo;
