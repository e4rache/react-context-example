import React, { Component } from 'react';
import MainContext from './MainContext'

class NeedContext extends Component {
    state = {}
    render() {
        return (
            <MainContext.Consumer>
                {(mainContext) => (
                    <div>
                        <p style={{ marginLeft: '30px' }}>NeedContext</p>
                        <p style={{ marginLeft: '40px' }}>isThisReal ? {mainContext.isThisReal ? "True" : "False"}</p>
                        <p style={{ marginLeft: '40px' }}>
                            <button onClick={mainContext.toggleIsThisReal}>Toggle</button>
                        </p>
                    </div>

                )}
            </MainContext.Consumer>
        );
    }
}

export default NeedContext;
