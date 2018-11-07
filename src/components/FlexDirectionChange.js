import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../globalStyle';
import DropDownMenu from './DropDownMenu';


const items = ["row", "column", "row-reverse"]

class FlexDirectionChange extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <FlexDirectionChangeStyle>
               
                <div>
                    <span className="title">flex-direction:</span>
                    {this.props.flexDirection}
                </div>
                <span className="dropdown">
                    <DropDownMenu 
                        defaultValue="row" 
                        contentItems={items} 
                        handleSelect={this.props.handleChange} 
                        width={120}
                        fontSize="8pt"
                        padding="5px"
                    />
                </span>
            </FlexDirectionChangeStyle>
        );
    }
}

export default FlexDirectionChange;

const FlexDirectionChangeStyle = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    .dropdown {
        padding-top: 6px;
    }
    .title {
        line-height: 35px;
        padding-right: 10px;
        font-size: 14pt;
        color: ${globalStyle.mainColor};
        font-family: ${globalStyle.titleFont};
    }
    border-bottom: 1px solid ${globalStyle.mainColor};
    z-index: 100;
    width: 100%;
    background-color: white;
    color: ${globalStyle.mainColor}
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
`