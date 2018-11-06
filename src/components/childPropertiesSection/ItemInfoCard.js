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
                flexBasis: '30px',
                alignSelf: 'auto'
            }
         };
    }
    selectItem = (selectedValue, title, itemVal) => {
        console.log(selectedValue, title, itemVal)
        // this.setState(
        //     { currentValues: {...this.state.currentValues, [title]: (title === "flexBasis") ? selectedValue : parseInt(selectedValue)}}, 
        //     () => this.props.handleSelect(selectedValue, title, itemVal)
        // )
        this.props.handleSelect(selectedValue, title, itemVal)
    }
    renderFlexValuesDisplay = (itemVal) => {
        return this.props.flexPropInfo.map(item => {
            return (
               <div className="item" key={item.title}>
                   <span className="title">{item.title}:</span>
                   <DropDownMenu  
                        handleSelect={(selected) => this.selectItem(selected, item.camelCaseTitle, itemVal)} 
                        contentItems={item.content} 
                        defaultValue={item.defaultValue} 
                        width={100}
                    />
               </div>
            )
       })
    }
    render() {
        return (
            <div>
                <ItemCardStyle bgColor={globalStyle.childPropColors[`${this.props.item}`]}>
                    <div className="itemCard">
                        <h3>{this.props.item}</h3>
                        {this.renderFlexValuesDisplay(this.props.item)}
                    </div>
                </ItemCardStyle>
            </div>
        );
    }
}

export default ItemCardDisplay;

const ItemCardStyle = styled.div`
    display: flex;
    h3 {
        font-size: 14pt;
        padding-top: 0px;
        padding-bottom: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    text-align: center;
    font-size: 10pt;
    color: ${globalStyle.mainColor}
    .itemCard {
        display: inline-block;
        width: 100px;
        margin: 20px 0;
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