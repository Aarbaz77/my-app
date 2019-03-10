import React, {Component} from 'react';
import './style.css'
import Hours from './Hours'
/*<input className="Slide" type="range" min="1" max="100" value="50" id="myRange"></input>*/

class Slider extends Component{
//this class renders all the weather information for 24 hours 
  render (){
    return (
      <div className="Slider">
          <Hours ClassName="hours1" time={this.props.time1} temp={this.props.temps1} conditions={this.props.desc1}/>
          <Hours ClassName="hours2" time={this.props.time2} temp={this.props.temps2} conditions={this.props.desc2}/>
          <Hours ClassName="hours3" time={this.props.time3} temp={this.props.temps3} conditions={this.props.desc3}/>
          <Hours ClassName="hours4" time={this.props.time4} temp={this.props.temps4} conditions={this.props.desc4}/>
          <Hours ClassName="hours5" time={this.props.time5} temp={this.props.temps5} conditions={this.props.desc5}/>
          <Hours ClassName="hours6" time={this.props.time6} temp={this.props.temps6} conditions={this.props.desc6}/>
          <Hours ClassName="hours7" time={this.props.time7} temp={this.props.temps7} conditions={this.props.desc7}/>
          <Hours ClassName="hours8" time={this.props.time8} temp={this.props.temps8} conditions={this.props.desc8}/>
          <Hours ClassName="hours9" time={this.props.time9} temp={this.props.temps9} conditions={this.props.desc9}/>
          <Hours ClassName="hours10" time={this.props.time10} temp={this.props.temps10} conditions={this.props.desc10}/>
          <Hours ClassName="hours11" time={this.props.time11} temp={this.props.temps11} conditions={this.props.desc11}/>
          <Hours ClassName="hours12" time={this.props.time12} temp={this.props.temps12} conditions={this.props.desc12}/>
          <Hours ClassName="hours13" time={this.props.time13} temp={this.props.temps13} conditions={this.props.desc13}/>
          <Hours ClassName="hours14" time={this.props.time14} temp={this.props.temps14} conditions={this.props.desc14}/>
          <Hours ClassName="hours15" time={this.props.time15} temp={this.props.temps15} conditions={this.props.desc15}/>
          <Hours ClassName="hours16" time={this.props.time16} temp={this.props.temps16} conditions={this.props.desc16}/>
          <Hours ClassName="hours17" time={this.props.time17} temp={this.props.temps17} conditions={this.props.desc17}/>
          <Hours ClassName="hours18" time={this.props.time18} temp={this.props.temps18} conditions={this.props.desc18}/>
          <Hours ClassName="hours19" time={this.props.time19} temp={this.props.temps19} conditions={this.props.desc19}/>
          <Hours ClassName="hours20" time={this.props.time20} temp={this.props.temps20} conditions={this.props.desc20}/>
          <Hours ClassName="hours21" time={this.props.time21} temp={this.props.temps21} conditions={this.props.desc21}/>
          <Hours ClassName="hours22" time={this.props.time22} temp={this.props.temps22} conditions={this.props.desc22}/>
          <Hours ClassName="hours23" time={this.props.time23} temp={this.props.temps23} conditions={this.props.desc23}/>
          <Hours ClassName="hours24" time={this.props.time24} temp={this.props.temps24} conditions={this.props.desc24}/>
      </div>
    )
  
  }

}

export default Slider;
