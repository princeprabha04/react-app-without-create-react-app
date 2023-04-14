import React, { Component } from "react";

import MySVGIcon from "../MySVGIcon";

export class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "prabha",
    };
  }

static getDerivedStateFromProps(props,state ){
    console.log(state,"this is from getDerivedStateFromProps")
}
componentDidMount() {
    console.log("this is from componentDidMount")

    this.setState({
        name:'prince'
    })

  }
  shouldComponentUpdate(props,state){
    console.log(state,"this shouldComponentUpdate could be only called when props or state changed ")

  }

  handleClick=()=>{
    console.log("from class component")
  }

  render() {
    const { name } = this.state;
    return (
      <div>
      <MySVGIcon iconName="Delete-Icon" onClick={this.handleClick}/>

        {name}
      </div>
    );
  }
}

export default LifeCycle;
