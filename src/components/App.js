import React, { Component } from 'react';

import ChildPropsContainer from './ChildPropsContainer'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            direction: "row"
         };
    }
    render() {
        return (
            <div>
                flex box guide
                <ChildPropsContainer flexDirection="column" />
            </div>
        );
    }
}

export default App;