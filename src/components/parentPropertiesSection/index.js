import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDisplayContainer from './FlexDisplayContainer';
import FlexDisplayItem from './FlexDisplayItem';
import { MainHeaderStyle } from '../styles/MainHeaderStyle';
import { SectionStyle } from '../styles/SectionStyle';
import { globalStyle } from '../../globalStyle';
import DropDownMenu from '../DropDownMenu';

const parentProperties = {
    defaultValues: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexWrap: "flex-wrap"
    },
    detail: [
        {
            camelCaseTitle: 'justifyContent',
            kabobCaseTitle: 'justify-content',
            values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
            defaultValue: "flex-start"
        },
        {
            camelCaseTitle: 'alignItems',
            kabobCaseTitle: 'align-items',
            values: ["flex-start", "flex-end", "center", "stretch", "baseline"],
            defaultValue: "flex-start"
        }
    ]
}

class ParentPropertiesSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            justifyContent: "flex-start",
            alignItems: "flex-start",
            justifyContent: "justify-content",
            flexWrap: "flex-wrap"
         };
    }
    selectValue = (propertyValue, propertyName) => {
        console.log(this.props.flexProperties)
        this.setState({ [propertyName]: propertyValue})
    }
    render() {
        return (
            <div style={{ marginBottom: '100px'}}>

                <SectionStyle>
                    <MainHeaderStyle color={globalStyle.parentPropColors.main}>
                        <h3 className="mainHeader">PARENT PROPERTIES</h3>
                    </MainHeaderStyle>

                    <div className="section">
                        {parentProperties.detail.map(property => {
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
                                    <FlexDisplayContainer 
                                        flexProperties={this.state}
                                        {...this.props}
                                    /> 
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