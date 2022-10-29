import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

 class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    const {isLoggedIn}= this.state
   
    return(
        <div>
            {isLoggedIn ? <HomePage/> : <LoginPage  />}
        </div>

        //turnery operator
    // <div>
    //{isLoggedIn ?<HomePage/> : <LoginPage  />}
    //</div> */}


    //let element;
    // if(isLoggedIn){
    //     element =<HomePage />
    // }else{
    //     element =<LoginPage />
    // }
    // return(
    //     <div>
    //         {element}
    //     </div>
    // )




    // if(this.state.isLoggedIn){
    //     return <HomePage />
    // }
    // else {
    //     return <LoginPage />
    // }
     
    // return (
    //   <div>
    //     <h1>Home hi</h1>
    //   </div>
    // )
    )
  }
}
export default CONDITIONAL_RENDERING