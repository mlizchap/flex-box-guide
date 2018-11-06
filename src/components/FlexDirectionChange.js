import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../globalStyle';
import DropDownMenu from './DropDownMenu';
const image =  require('../static/debut_dark.png')


const items = ["row", "column", "row-reverse"]

class FlexDirectionChange extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <FlexDirectionChangeStyle>
                <div><span className="title">flex-direction:</span>{this.props.flexDirection}</div>
                <DropDownMenu 
                    defaultValue="row" 
                    contentItems={items} 
                    handleSelect={this.props.handleChange} 
                    width={150}
                    fontSize="10pt"
                    padding="10px"
                />
            </FlexDirectionChangeStyle>
        );
    }
}

export default FlexDirectionChange;

const FlexDirectionChangeStyle = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;

    .title {
        line-height: 35px;
        padding-right: 10px;
        font-size: 18pt;
        color: ${globalStyle.mainColor};
        font-family: ${globalStyle.titleFont};
    }
    // background-image: url(${image})
    border-bottom: 1px solid ${globalStyle.mainColor};
    z-index: 100;
    width: 100%;
    background-color: white;
    color: ${globalStyle.mainColor}
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
`