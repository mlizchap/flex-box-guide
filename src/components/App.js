import React, { Component } from 'react';

import ChildPropsContainer from './ChildPropsContainer'
import FlexDirectionChange from './FlexDirectionChange';
import DropDownMenu from './DropDownMenu';

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
                <DropDownMenu defaultValue="test" contentItems={items} />
                flex box guide
                <FlexDirectionChange handleChange={this.changeDirection} />
                <ChildPropsContainer flexDirection={this.state.direction} />
            </div>
        );
    }
}

export default App;