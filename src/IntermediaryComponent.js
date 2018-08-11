import React from 'react'
import NeedContext from './NeedContext';


const IntermediaryComponent = () => (
    <div>
        <p style={{ marginLeft: '20px' }}>IntermediaryComponent</p>
        <NeedContext />
    </div>
)

export default IntermediaryComponent