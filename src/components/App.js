import React, { Component } from 'react';

import ChildPropsContainer from './ChildPropsContainer'
import FlexDirectionChange from './FlexDirectionChange';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            direction: "row"
         };
    }
    changeDirection = () => {
        (this.state.direction === "row") ? 
            this.setState({ direction: "column"}) : 
            this.setState({ direction: "row"})
    }
    render() {
        return (
            <div>
                flex box guide
                <FlexDirectionChange handleChange={this.changeDirection} />
                <ChildPropsContainer flexDirection={this.state.direction} />
            </div>
        );
    }
}

export default App;