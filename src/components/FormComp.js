import React, { Component } from 'react';
import {Switch,Button} from '@material-ui/core';
import geodist from 'geodist';
import Graph from '../dataStructs/Graph';


const locationArray=[
  [21.33,79.5],
  [ 21.14, 79.09 ],
  [ 21.17,79.14 ],
  [ 21.6, 79.00 ],
];

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
      let g=new Graph();
      let locArray=[],n=0;
      for(let i=0;i<this.state.checked.length;i++){
        if(this.state.checked[i]==true){
          locArray.push(locationArray[i]);
          g.addNode(i);
        }
      }
      console.log(locArray);
      n=locArray.length;
      for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
          if(i!=j){
            console.log(geodist({lat:locArray[i][0], lon: locArray[i][1]}, {lat: locArray[j][0], lon: locArray[j][1]}),j);
            g.addEdge(i,j,geodist({lat:locArray[i][0], lon: locArray[i][1]}, {lat: locArray[j][0], lon: locArray[j][1]}))
          }
        }
      }
      g.primsMST().display();

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