import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDirectionChange from './FlexDirectionChange';
import ChildPropertiesSection from './_childPropertiesSection';
import ParentPropertiesSection from './parentPropertiesSection';
import { globalStyle } from '../globalStyle';
import Header from './Header';

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
                <Header />
                <FlexDirectionChange 
                    handleSelect={(selectedItem) => this.setState({direction: selectedItem})} 
                />
                <ContentDisplay>
                    <ParentPropertiesSection flexDirection={this.state.direction} />
                    <ChildPropertiesSection flexDirection={this.state.direction}/>

                </ContentDisplay> 
            </div>
        );
    }
}

export default App;

const ContentDisplay = styled.div`
    width: 80%;
    margin-right: auto;
    margin-left: auto;
`