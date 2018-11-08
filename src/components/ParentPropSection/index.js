import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDisplayContainer from './FlexDisplayContainer';
import { MainHeaderStyle } from '../styles/MainHeaderStyle';
import { SectionStyle } from '../styles/SectionStyle';
import { globalStyle } from '../../globalStyle';
import DropDownMenu from '../DropDownMenu';

const parentProperties = {
    defaultValues: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap",
        alignContent: "flex-start"
    },
    detail: [
        {
            camelCaseTitle: 'justifyContent',
            kabobCaseTitle: 'justify-content',
            values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
            defaultValue: "flex-start",
            itemAmount: 4
        },
        {
            camelCaseTitle: 'alignItems',
            kabobCaseTitle: 'align-items',
            values: ["flex-start", "flex-end", "center", "stretch", "baseline"],
            defaultValue: "flex-start",
            itemAmount: 4
        },
        {
            camelCaseTitle: 'alignContent',
            kabobCaseTitle: 'align-content',
            values: ["flex-start", "flex-end", "center", "stretch", "space-between", "space-around"],
            defaultValue: "flex-start",
            itemAmount: 8
        },
        {
            camelCaseTitle: 'flexWrap',
            kabobCaseTitle: 'flex-wrap',
            values: ["no-wrap", "wrap", "wrap-reverse"],
            defaultValue: "no-wrap",
            itemAmount: 8
        },
    ]
}

class ParentPropertiesSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            justifyContent: "flex-start",
            alignItems: "flex-start",
            alignContent: "flex-start",
            flexWrap: "nowrap"
         };
    }
    selectValue = (propertyValue, propertyName) => {
        this.setState({ [propertyName]: propertyValue})
    }
    render() {
        return (
            <div style={{ marginBottom: '100px'}}>

                <SectionStyle>
                    <MainHeaderStyle color={globalStyle.parentPropColors.main}>
                        <h3 className="mainHeader" id="parentProperties">PARENT PROPERTIES</h3>
                    </MainHeaderStyle>

                        {parentProperties.detail.map(property => {
                            return (
                                <div className="section" id={property.camelCaseTitle} key={property.camelCaseTitle}>
                                    <h1 style={{color: globalStyle.parentPropColors.subHeader}}>{property.kabobCaseTitle}</h1>
                                    <DropDownMenuSectionStyle>
                                        <DropDownMenu 
                                            font={globalStyle.mainFont}
                                            handleSelect={(selected) => this.selectValue(selected, property.camelCaseTitle)}
                                            contentItems={property.values}
                                            defaultValue={property.defaultValue}
                                            buttonColor={globalStyle.parentPropColors.dropDownBtn}
                                            buttonFontColor={globalStyle.mainColor}
                                        />
                                    </DropDownMenuSectionStyle>
                                    <FlexDisplayContainer 
                                        flexProperties={
                                            {
                                                ...parentProperties.defaultValues, 
                                                [`${property.camelCaseTitle}`]: this.state[`${property.camelCaseTitle}`]
                                            }
                                        }
                                        itemAmount={property.itemAmount}
                                        {...this.props}
                                    /> 
                                </div>

                            )
                        })}
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