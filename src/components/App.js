import React, { Component } from 'react';

import ChildPropsContainer from './ChildPropsContainer'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                flex box guide
                <ChildPropsContainer />
                <div>test</div>
            </div>
        );
    }
}

export default App;