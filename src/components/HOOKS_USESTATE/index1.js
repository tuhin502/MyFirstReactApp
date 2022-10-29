import React, { Component } from 'react'

 class HOOKS_USESTATE1 extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    handleIcrement = () =>{
        this.setState({
            count : this.state.count + 1
        })
    } 

  render() {
    const {count} = this.state;
    return (
      <div>
        <h1> Count :{count} </h1>
        <button onClick={this.handleIcrement}>Increment</button>
      
      </div>
    )
  }
}
export default HOOKS_USESTATE1;