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
    selectValue = (propertyValue, propertyName) => {
        console.log(propertyName, propertyValue)
        this.setState({ [propertyName]: propertyValue}, () => console.log(this.state))
    }
    render() {
        return (
            <div style={{ marginBottom: '100px'}}>


                <SectionStyle>
                <MainHeaderStyle color={globalStyle.parentPropColors.main}>
                    <h3 className="mainHeader">PARENT PROPERTIES</h3>
                </MainHeaderStyle>


                <div className="section">
                        {/* <h1>justify-content</h1>
                        
                        <DropDownMenuSectionStyle>
                            <DropDownMenu 
                                font={globalStyle.mainFont}
                                handleSelect={(selected) => this.selectValue(selected, data.parentProperties[0].camelCaseTitle)}
                                contentItems={data.parentProperties[0].values}
                                defaultValue={data.parentProperties[0].defaultValue}
                            />
                        </DropDownMenuSectionStyle>

                        <FlexDisplayContainer {...this.props} justifyContent={this.state.justifyContent} /> */}

                        {data.parentProperties.map(property => {
                            return (
                                <div key={property.camelCaseTitle}>
                                    <h1>{property.kabobCaseTitle}</h1>
                                    <DropDownMenuSectionStyle>
                                        <DropDownMenu 
                                            font={globalStyle.mainFont}
                                            handleSelect={(selected) => this.selectValue(selected, property.camelCaseTitle)}
                                            contentItems={property.values}
                                            defaultValue={property.defaultValue}
                                        />
                                    </DropDownMenuSectionStyle>
                                    <FlexDisplayContainer {...this.props} justifyContent={this.state[`${property.camelCaseTitle}`]} /> 
                                </div>
                            )
                        })}

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