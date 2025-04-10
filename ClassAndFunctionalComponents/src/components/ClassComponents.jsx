import React, { Component } from 'react'
import CounterInc from './CounterInc';
export default class ClassComponents extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    incValue(){
        this.setState({count:this.state.count+1})
    }
  
 componentDidMount(){
        console.log("component Mounted!")
    }
    componentWillUnmount(){
        console.log("removed!!")
    }
  render() {

    return (
      <div>
        <CounterInc number={this.state.count}/>
        <button onClick={this.incValue.bind(this)}>Increase Count</button>
        <button onClick={()=>{
            this.incValue()
        }}>Increase Count</button>
        {/* In the above case we can use arrow/bind function */}
      </div>
    )
  }
}
