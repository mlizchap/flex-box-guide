import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../../globalStyle';
import DropDownMenu from '../DropDownMenu';


const selectionContent = ["row", "column", "row-reverse", "column-reverse"]

class FlexDirectionChange extends Component {
    render() {
        return (
            <FlexDirectionChangeStyle>
                {/* <div> */}
                    <span className="title">flex-direction:</span>
                    {this.props.flexDirection}
                {/* </div> */}
                <span className="dropdown">
                    <DropDownMenu 
                        defaultValue="row" 
                        contentItems={selectionContent} 
                        handleSelect={(selected) => this.props.handleSelect(selected)}
                        width={140}
                        fontSize="10pt"
                        padding="5px"
                        font={globalStyle.titleFont}
                        buttonColor={globalStyle.childPropColors.c}
                        buttonFontColor={globalStyle.childPropColors.main}
                    />
                </span>
            </FlexDirectionChangeStyle>
        );
    }
}

export default FlexDirectionChange;

const FlexDirectionChangeStyle = styled.div`

    color: ${globalStyle.mainColor}

    
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
`

    // display: flex;
    // justify-content: center;
    // padding: 10px;
    // border-bottom: 1px solid ${globalStyle.mainColor};
    // z-index: 100;
    // width: 100%;
    // background-color: white;
    //top: 0;