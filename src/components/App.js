import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDirectionChange from './FlexDirectionChange';
import ChildPropertiesSection from './childPropertiesSection';
import { globalStyle } from '../globalStyle';

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
                <ContentDisplay>
                    <div class="childrenPropSection">
                    <h1 className="mainHeader">Child Properties</h1>
                        <div className="childrenPropsContent">
                            <ChildPropertiesSection flexDirection={this.state.direction}/>
                        </div>
                    </div>
                </ContentDisplay>
            </div>
        );
    }
}

export default App;

const ContentDisplay = styled.div`
    font-family: ${globalStyle.mainFont}
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    .mainHeader {
        //margin-top: 0;
        //padding-top: 0;
        padding: 10px;
        display: inline-block;
        font-family: ${globalStyle.titleFont};
        color: ${globalStyle.mainColor}
        background-color: ${globalStyle.accent1};
    }
    .childrenPropsContent {
        padding: 0 20px;
    }
    .childrenPropSection {
        background-color: ${globalStyle.lightblue};
        // padding: 20px;
        margin: 40px;
    }
`