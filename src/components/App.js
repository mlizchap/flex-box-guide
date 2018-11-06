import React, { Component } from 'react';

import FlexDirectionChange from './FlexDirectionChange';
import ChildPropMainContainer from './childPropertiesSection/MainContainer';

const items = ["one", "two", "three"]

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
                <ChildPropMainContainer flexDirection={this.state.direction}/>
            </div>
        );
    }
}

export default App;