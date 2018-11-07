import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDirectionChange from './FlexDirectionChange';
import ChildPropertiesSection from './childPropertiesSection';
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
            <StyledApp>
                
                <FlexDirectionChange 
                    handleSelect={(selectedItem) => this.setState({direction: selectedItem})} 
                />
                <ContentDisplay>
                    <div className="childrenPropSection">
                    <h1 className="mainHeader">CHILD PROPERTIES</h1>
                        <div className="childrenPropsContent">
                            <ChildPropertiesSection flexDirection={this.state.direction}/>
                        </div>
                    </div>
                </ContentDisplay>
            </StyledApp>
            </div>
        );
    }
}

export default App;

const StyledApp = styled.div`

`

const ContentDisplay = styled.div`
    opacity: 1;
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
    }
    .childrenPropsContent {
        padding: 0 20px;
    }
    .childrenPropSection {
        border: 1px solid ${globalStyle.mainColor}
        //background-color: #c4c4c4;
        //background-color: rgb(226, 232, 255, .4);
        margin: 80px;
    }
`