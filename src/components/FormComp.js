import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';

class FormComp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checked1:false,
            checked2:false,
            checked3:false,
            checked4:false,
            checked5:false,
            checked6:false,
            checked7:false
         }
    }
    render() { 
        return ( 
            <div>
            <form>
            <Switch
        checked={this.state.checked1}
        onChange={()=>{this.setState({checked1:!this.state.checked1})}}
        value="checked1"
      />
      <Switch
        checked={this.state.checked2}
        onChange={()=>{this.setState({checked2:!this.state.checked2})}}
        value="checked2"
      />
      <Switch
        checked={this.state.checked3}
        onChange={()=>{this.setState({checked3:!this.state.checked3})}}
        value="checked3"
      />
      <Switch
        checked={this.state.checked4}
        onChange={()=>{this.setState({checked4:!this.state.checked4})}}
        value="checked4"
      />
      {/* <Switch
        checked={this.state.checked5}
        onChange={()=>{this.setState({checked5:!this.state.checked5})}}
        value="checked5"
      />
      <Switch
        checked={this.state.checked6}
        onChange={()=>{this.setState({checked6:!this.state.checked6})}}
        value="checked6"
      />
      <Switch
        checked={this.state.checked7}
        onChange={()=>{this.setState({checked7:!this.state.checked7})}}
        value="checked7"
      /> */}
            </form>
            </div>
         );
    }
}
 
export default FormComp;