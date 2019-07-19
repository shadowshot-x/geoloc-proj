import React, { Component } from 'react';
import {Switch,Button} from '@material-ui/core';
import geodist from 'geodist'


const locationArray=[
  [ 21.14, 79.09 ],
  [ 21.17,79.14 ],
  [ 21.6, 79.00 ],
  [ 21.14, 79.09 ]
]

class FormComp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checked:[false,false,false,false]
         }
         this.handleSwitchChange=this.handleSwitchChange.bind(this)
         this.handleCalc=this.handleCalc.bind(this)
    }
    handleCalc(e){
      e.preventDefault()
      let distanceArray=[];
      for(let i=0;i<locationArray.length;i++){
        if(i+1!==locationArray.length)
        distanceArray[i]=geodist({lat:locationArray[i][0],lon:locationArray[i][1]},{lat:locationArray[i+1][0],lon:locationArray[i+1][1]})
        else{
          distanceArray[i]=geodist({lat:locationArray[0][0],lon:locationArray[0][1]},{lat:locationArray[i][0],lon:locationArray[i][1]})
        }
      }
      console.log(distanceArray);

    }
    handleSwitchChange(i){
      let checked=this.state.checked;
      checked[i]=!checked[i]
      this.setState({
        checked:checked
      })
      console.log('switch checked with', checked);
    }
    render() { 
        return ( 
            <div>
            <form>
            <Switch
        checked={this.state.checked[0]}
        onChange={()=>{
          this.handleSwitchChange(0)
        }}
       
      />
      <Switch
        checked={this.state.checked[1]}
        onChange={()=>{
          this.handleSwitchChange(1)
        }}
       
      />
      <Switch
        checked={this.state.checked[2]}
        onChange={()=>{
          this.handleSwitchChange(2)
        }}
       
      />
      <Switch
        checked={this.state.checked[3]}
        onChange={()=>{
          this.handleSwitchChange(3)
        }}
      />
      <Button onClick={this.handleCalc}>Calculate</Button>
            </form>
            </div>
         );
    }
}
 
export default FormComp;