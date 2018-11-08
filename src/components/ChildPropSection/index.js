import React, { Component } from 'react';

import FlexDisplayBox from '../FlexDisplayBox';
import { globalStyle } from '../../globalStyle';
import ItemInfoCardContainer from './ItemInfoCardContainer';
import { MainHeaderStyle } from '../styles/MainHeaderStyle';
import {childProperties, childPropCardInfo } from '../../static/flexBoxData';
import { SectionStyle } from '../styles/SectionStyle';


class ChildPropSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexProperties: childProperties.defaultValues
         };
    }
    changePropToSelected = (value, title, item) => {
            this.setState(
                { flexProperties: 
                    { 
                        ...this.state.flexProperties, 
                        [`${title}`]: {...this.state.flexProperties[`${title}`], 
                        [`${item}`]: value
                    }
                }}
            )
    }
    render() {
        return (
            <div>
                <SectionStyle>
                <MainHeaderStyle color={globalStyle.childPropColors.main}>
                    <h3 className="mainHeader">PARENT PROPERTIES</h3>
                </MainHeaderStyle>

                {childPropCardInfo.itemCardValues.map((property,index) => {
                    const {flexGrow, flexShrink, flexBasis, alignSelf,order} = this.state.flexProperties;
                    return (
                        <div className="section" key={property[0].title}>
                            <h1 style={{color: globalStyle.childPropColors.c}}>
                                {(index === 0) ? "flex-grow | flex-shrink | flex-basis" 
                                : (index === 1) ? "align-self"
                                : (index === 2) ? "order"
                                : null
                            }
                            </h1>
                            <ItemInfoCardContainer 
                                propertyValuesForCard={property} 
                                handleSelect={(a,b,c) => this.changePropToSelected(a,b,c,index)}
                            />
                            <FlexDisplayBox 
                                itemColors={[globalStyle.childPropColors.a, globalStyle.childPropColors.b, globalStyle.childPropColors.c]}
                                itemAmount={3}
                                characters={["a", "b", "c"]}
                                childFlexProperties = {
                                    (index === 0) ? { ...childProperties.defaultValues, flexGrow, flexShrink, flexBasis } 
                                    : (index === 1) ? { ...childProperties.defaultValues, alignSelf } 
                                    : (index === 2) ? { ...childProperties.defaultValues, order } 
                                    : childProperties.defaultValues
                                }
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

export default ChildPropSection;