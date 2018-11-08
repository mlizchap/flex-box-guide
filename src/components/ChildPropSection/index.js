import React, { Component } from 'react';

import FlexDisplayBox from '../FlexDisplayBox';
import { globalStyle } from '../../globalStyle';
import ItemInfoCardContainer from './ItemInfoCardContainer';
import { MainHeaderStyle } from '../styles/MainHeaderStyle';
import {childProperties } from '../../static/flexBoxData';
import { SectionStyle } from '../styles/SectionStyle';


class ChildPropSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexProperties: childProperties.defaultValues
         };
        this.flexLocation = React.createRef();
    }
    changePropToSelected = (value, title, item) => {
            console.log(this.flexLocation.currentt)
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
    handleScroll = () => {
        // console.log(this.flexLocation.current.getBoundingClientRect().top)
        // if (this.flexLocation.current.getBoundingClientRect().top > -2 && this.flexLocation.current.getBoundingClientRect().top < 5) {
            console.log(this.flexLocation)
            this.props.hasReachedTop("LOC", this.flexLocation);
        // }
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }
    
    render() {
        const {flexGrow, flexShrink, flexBasis, alignSelf,order} = this.state.flexProperties;
        return (
            <SectionStyle>
                <MainHeaderStyle color={globalStyle.childPropColors.main}>
                    <h3 className="mainHeader" id="childProperties">CHILD PROPERTIES</h3>
                </MainHeaderStyle>

                <div className="section" id="flex" ref={this.flexLocation}>
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

                <div className="section" id="alignSelf" ref={this.alignSelf}>
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
        );
    }
}

export default ChildPropSection;