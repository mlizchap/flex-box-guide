import React, { Component } from 'react';

import FlexDisplayBox from '../FlexDisplayBox';
import { globalStyle } from '../../globalStyle';
import ItemInfoCardContainer from './ItemInfoCardContainer';
import { MainHeaderStyle } from '../styles/MainHeaderStyle';
import {childProperties, flexBoxData } from '../../static/flexBoxData';
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
        const {flexGrow, flexShrink, flexBasis, alignSelf,order} = this.state.flexProperties;
        return (
            <SectionStyle>
                <MainHeaderStyle color={globalStyle.childPropColors.main}>
                    <h3 className="mainHeader" id="childProperties">CHILD PROPERTIES</h3>
                </MainHeaderStyle>
                <div className="section" id="flex">
                    <h1>flex-grow | flex-shrink | flex-basis</h1>
                    <ItemInfoCardContainer 
                        propertyValuesForCard={childProperties.detail.growShrinkBasis} 
                        handleSelect={this.changePropToSelected}
                    />
                
                <FlexDisplayBox 
                    itemColors={[globalStyle.childPropColors.a, globalStyle.childPropColors.b, globalStyle.childPropColors.c]}
                    itemAmount={3}
                    characters={["a", "b", "c"]}
                    childFlexProperties = {{ ...childProperties.defaultValues, flexGrow, flexShrink, flexBasis }}
                    {...this.props} 
                /> 
                </div>

                <div className="section" id="alignSelf">
                    <h1>align-self</h1>
                    <ItemInfoCardContainer 
                        propertyValuesForCard={childProperties.detail.alignSelf} 
                        handleSelect={this.changePropToSelected}
                    />
                
                    <FlexDisplayBox 
                        itemColors={[globalStyle.childPropColors.a, globalStyle.childPropColors.b, globalStyle.childPropColors.c]}
                        itemAmount={3}
                        characters={["a", "b", "c"]}
                        childFlexProperties = {{ ...childProperties.defaultValues, alignSelf }}
                        {...this.props} 
                    /> 
                </div>

                <div className="section" id="order">
                    <h1>order</h1>
                    <ItemInfoCardContainer 
                        propertyValuesForCard={childProperties.detail.order} 
                        handleSelect={this.changePropToSelected}
                    />
                
                    <FlexDisplayBox 
                        itemColors={[globalStyle.childPropColors.a, globalStyle.childPropColors.b, globalStyle.childPropColors.c]}
                        itemAmount={3}
                        characters={["a", "b", "c"]}
                        childFlexProperties = {{ ...childProperties.defaultValues, order }}
                        {...this.props} 
                    /> 
                </div>
            </SectionStyle>



            // <div id="childProperties">
            //     <SectionStyle>
            //     <MainHeaderStyle color={globalStyle.childPropColors.main}>
            //         <h3 className="mainHeader">CHILD PROPERTIES</h3>
            //     </MainHeaderStyle>

            //     {childProperties.detail.map((property,index) => {
            //         console.log(property)

            //         //const {flexGrow, flexShrink, flexBasis, alignSelf,order} = this.state.flexProperties;
            //         // return (
            //         //     <div>
            //         //         <ItemInfoCardContainer 
            //         //             propertyValuesForCard={property} 
            //         //             handleSelect={(a,b,c) => this.changePropToSelected(a,b,c,index)}
                      
            //         //     </div>
            //             // <div className="section" key={property[0].title}>
            //             //     <h1 style={{color: globalStyle.childPropColors.c}}>
            //             //         {(index === 0) ? "flex-grow | flex-shrink | flex-basis" 
            //             //         : (index === 1) ? "align-self"
            //             //         : (index === 2) ? "order"
            //             //         : null
            //             //     }
            //             //     </h1>
            //             //     <ItemInfoCardContainer 
            //             //         propertyValuesForCard={property} 
            //             //         handleSelect={(a,b,c) => this.changePropToSelected(a,b,c,index)}
            //             //     />
            //             //     <FlexDisplayBox 
            //             //         itemColors={[globalStyle.childPropColors.a, globalStyle.childPropColors.b, globalStyle.childPropColors.c]}
            //             //         itemAmount={3}
            //             //         characters={["a", "b", "c"]}
            //             //         childFlexProperties = {
            //             //             (index === 0) ? { ...childProperties.defaultValues, flexGrow, flexShrink, flexBasis } 
            //             //             : (index === 1) ? { ...childProperties.defaultValues, alignSelf } 
            //             //             : (index === 2) ? { ...childProperties.defaultValues, order } 
            //             //             : childProperties.defaultValues
            //             //         }
            //             //         {...this.props} 
            //             //     /> 
            //             // </div>
            //         )
            //     })}
            //     </SectionStyle>
            // </div>
        );
    }
}

export default ChildPropSection;