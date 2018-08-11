import React, { Component } from 'react'
import MainContext from './MainContext'

class MainContextProvider extends Component {

    state = {
        isThisReal: true
    }

    render() {
        const { isThisReal } = this.state
        return (
            <MainContext.Provider value={{
                isThisReal,
                toggleIsThisReal: () => {
                    console.log('toggleIsThisReal()')
                    this.setState({
                        isThisReal: !this.state.isThisReal
                    })
                }
            }}>
                <p style={{ marginLeft: '10px' }}>MainContextProvider</p>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export default MainContextProvider