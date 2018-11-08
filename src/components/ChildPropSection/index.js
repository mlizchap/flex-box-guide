import React, { Component } from 'react';

import FlexDisplayBox from '../FlexDisplayBox';
import FlexDisplayItem from '../FlexDisplayItem';
import { globalStyle } from '../../globalStyle';
import ItemInfoCard from './ItemInfoCard';
import ItemInfoCardContainer from './ItemInfoCardContainer';


const childProperties = {
    defaultValues: {
        flexGrow: {a: 0, b: 0, c: 0},
        flexShrink: {a: 1, b: 1, c: 1},
        flexBasis: {a:"auto", b:"auto", c:"auto"},
        alignSelf: {a:"auto", b:"auto", c:"auto"},
        order: {a: 0, b: 0, c: 0},
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
const childPropCardInfo = {
    items: ["a", "b", "c"],
    itemCardValues: [
        [{
            title: "flex-grow",
            camelCaseTitle: "flexGrow",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1,
            color: "orange"
        },
        {
            title: "flex-shrink",
            camelCaseTitle: "flexShrink",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1,
            color: "navy"
        },
        {
            title: "flex-basis",
            camelCaseTitle: "flexBasis",
            content: ["20%", "33%", "40%", "60%", "auto", "content"],
            defaultValue: "auto",
            color: "yellow"
        }],
        [{
            title: "flex-shrink",
            camelCaseTitle: "flexShrink",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1,
            color: "navy"
        }],
    ]
}


class ChildPropSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexProperties: childProperties.defaultValues
         };
    }
    changePropToSelected = (value, title, item) => {
        // console.log({...this.state.flexProperties[`${title}`]})
        this.setState(
            { flexProperties: 
                // ...this.state.flexProperties,
                { ...this.state.flexProperties, [`${title}`]: {...this.state.flexProperties[`${title}`], [`${item}`]: value}
            }}, () => console.log(this.state)
        )
    }
    render() {
        return (
            <div>
                {childPropCardInfo.itemCardValues.map((property,index) => {
                    return (
                        <div key={property[0].title}>
                            <ItemInfoCardContainer 
                                propertyValuesForCard={property} 
                                // handleSelect={(content) => this.changePropToSelected(content, property[index].title)}
                                handleSelect={this.changePropToSelected}
                            />
                            <FlexDisplayBox 
                                itemColors={[globalStyle.childPropColors.a, globalStyle.childPropColors.b, globalStyle.childPropColors.c]}
                                itemAmount={3}
                                characters={["a", "b", "c"]}
                                childFlexProperties={this.state.flexProperties}
                                {...this.props} 
                            /> 
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ChildPropSection;