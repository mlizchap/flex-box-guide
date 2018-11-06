import React, { Component } from 'react';

import ChildPropsContainer from './ChildPropsContainer'
import FlexDirectionSelection from './FlexDirectionSelection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    changeDirection = () => {
        console.log("change")
    }
    render() {
        return (
            <div>
                flex box guide
                <FlexDirectionSelection handleChange={this.changeDirection}/>
                <ChildPropsContainer direction={`column`} />
            </div>
        );
    }
}

export default App;