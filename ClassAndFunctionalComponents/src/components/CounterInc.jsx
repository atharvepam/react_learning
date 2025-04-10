import React, { Component } from 'react'

export default class CounterInc extends Component {
    componentDidUpdate(){
        
        console.log("component Updated")
    }
  render() {
    return (
      <div>
        <h2>Count:{this.props.number}</h2>
       
      </div>
    )
  }
}
