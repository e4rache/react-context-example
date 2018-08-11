import React, { Component } from 'react'
import MainContextProvider from './MainContextProvider'
import IntermediaryComponent from './IntermediaryComponent';

/*
  The context is used to pass down objects 
  and functions down the component tree without using props.
  IntermediaryComponent doesn't pass down any props to NeedContext component.
  The context defined in MainContextProvider is available within NeedContext component.
*/

class App extends Component {
  render() {
    return (
      <div>
        <h3>Simple React Context Example</h3>
        <MainContextProvider>
          <IntermediaryComponent />
        </MainContextProvider>
      </div>
    )
  }
}

export default App
