import React, {Component} from 'react';
import './style.css'

class Information extends Component{
  render (){
    return (
        <div>
            <h4 className="Pressure">{this.props.name}</h4>
            <img className="Img" src={this.props.img} alt="img"></img>
            <p>{this.props.percent}</p>
        </div>
      )
    
    }
  
  }
      
export default Information;