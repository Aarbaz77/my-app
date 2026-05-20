import React, {Component} from 'react';
import './style.css'

class Information extends Component{
  render (){
    return (
        <div className="glass-panel" style={{borderRadius: '25px', margin: '5px', padding: '10px'}}>
            <h4 className="Pressure">{this.props.name}</h4>
            <img className="Img" src={this.props.img} alt="img"></img>
            <p>{this.props.percent}</p>
        </div>
      )
    
    }
  
  }
      
export default Information;