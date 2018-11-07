import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDirectionChange from './FlexDirectionChange';
import ChildPropertiesSection from './childPropertiesSection';
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
        console.log(this.state.direction)
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
    // .mainHeader {
    //     padding: 10px;
    //     display: inline-block;
    //     font-family: ${globalStyle.titleFont};
    //     color: ${globalStyle.mainColor}
    // }
    // .childrenPropsContent {
    //     padding: 0 20px;
    // }
    // .childrenPropSection {
    //     border: 1px solid ${globalStyle.mainColor}
    //     margin: 80px;
    // }
`