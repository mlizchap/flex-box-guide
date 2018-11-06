import React, { Component } from 'react';
import DropDownMenu from '../DropDownMenu';
import styled from 'styled-components';
import { globalStyle } from '../../globalStyle'

const data = {
    items: ["a", "b", "c"],
    flexPropInfo: [
        {
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
        }
    ]
}

class ItemCardDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentValues: {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: '30px'
            }
         };
    }
    selectItem = (selectedValue, title, itemVal) => {
        //console.log("SEL", selectedValue)
        this.setState(
            { currentValues: {...this.state.currentValues, [title]: (title === "flexBasis") ? selectedValue : parseInt(selectedValue)}}, 
            () => this.props.handleSelect(selectedValue, title, itemVal)
        )
    }
    renderFlexValuesDisplay = (itemVal) => {
        //console.log(itemVal)
        return data.flexPropInfo.map(item => {
            return (
               <div className="item" key={item.title}>
                   <span className="title">{item.title}:</span>
                   <DropDownMenu  handleSelect={(selected) => this.selectItem(selected, item.camelCaseTitle, itemVal)} contentItems={item.content} defaultValue={item.defaultValue} width={100}/>
               </div>
            )
       })
    }
    render() {
        return (
            <div>
                {data.items.map(item => {
                    {console.log(item)}
                    return (
                        <ItemCardStyle bgColor={globalStyle.childPropColors[`${item}`]}>
                            <div className="itemCard">
                                <h3>{item}</h3>
                                {this.renderFlexValuesDisplay(item)}
                            </div>
                        </ItemCardStyle>
                    )
                })}
            </div>
        );
    }
}

export default ItemCardDisplay;

const ItemCardStyle = styled.div`
    display: inline-block;
    text-align: center;
    font-size: 10pt;
    color: ${globalStyle.mainColor}
    .itemCard {
        display: inline-block;
        width: 200px;
        margin: 20px;
        padding: 20px;
        background-color: ${props => props.bgColor};
    }
    .title {
        display: inline-block;
        width: 75px;
        text-align: right;
        margin-right: 10px;
    }
    .item {
        margin-top: 5px;
    }
`