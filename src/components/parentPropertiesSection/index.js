import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDisplayContainer from './FlexDisplayContainer';
import FlexDisplayItem from './FlexDisplayItem';
import { MainHeaderStyle } from '../styles/MainHeaderStyle';
import { SectionStyle } from '../styles/SectionStyle';
import { globalStyle } from '../../globalStyle';
import DropDownMenu from '../DropDownMenu';

const data = {
    parentProperties: [
        {
            camelCaseTitle: 'justifyContent',
            kabobCaseTitle: 'justify-content',
            values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
            defaultValue: "flex-start"
        }
    ]
}

class ParentPropertiesSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            justifyContent: "flex-start"
         };
    }
    selectValue = (selected) => {
        console.log(selected)
        this.setState({ justifyContent: selected})
    }
    render() {
        return (
            <div style={{ marginBottom: '100px'}}>


                <SectionStyle>
                <MainHeaderStyle color={globalStyle.parentPropColors.main}>
                    <h3 className="mainHeader">PARENT PROPERTIES</h3>
                </MainHeaderStyle>


                <div className="section">
                        <h1>justify-content</h1>
                        
                        <DropDownMenuSectionStyle>
                            <DropDownMenu 
                                font={globalStyle.mainFont}
                                handleSelect={this.selectValue}
                                contentItems={data.parentProperties[0].values}
                                defaultValue={data.parentProperties[0].defaultValue}
                            />
                        </DropDownMenuSectionStyle>

                        <FlexDisplayContainer {...this.props} justifyContent={this.state.justifyContent} />

                    </div>



                </SectionStyle>
                                    
                

            </div>
        );
    }
}

export default ParentPropertiesSection;

const DropDownMenuSectionStyle = styled.div`
    // background-color: purple;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`