import React, { Component } from 'react';
import DropDownMenu from '../DropDownMenu';
import styled from 'styled-components';
import { globalStyle } from '../../globalStyle'

// const data = {
//     items: ["a", "b", "c"],
//     flexPropInfo: [
//         {
//             title: "flex-grow",
//             camelCaseTitle: "flexGrow",
//             content: [0, 1, 2, 3, 4, 5],
//             defaultValue: 1,
//             color: "orange"
//         },
//         {
//             title: "flex-shrink",
//             camelCaseTitle: "flexShrink",
//             content: [0, 1, 2, 3, 4, 5],
//             defaultValue: 1,
//             color: "navy"
//         },
//         {
//             title: "flex-basis",
//             camelCaseTitle: "flexBasis",
//             content: ["20%", "33%", "40%", "60%", "auto", "content"],
//             defaultValue: "auto",
//             color: "yellow"
//         }
//     ]
// }

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
               <div className="item" key={item.property}>
                   <span className="property">
                        {item.property}:
                    </span>
                   <span className="dropdown">
                   <DropDownMenu  
                        handleSelect={(selected) => this.selectItem(selected, item.camelCaseTitle, itemVal)} 
                        contentItems={item.content} 
                        defaultValue={item.defaultValue} 
                        width={100}
                        font={globalStyle.mainFont}
                    />
                    </span>
               </div>
            )
       })
    }
    render() {
        // console.log(this.props.flexDirection)
        return (
            <div>
                <ItemCardStyle bgColor={globalStyle.childPropColors[`${this.props.item}`]}>
                    <div className="itemCard">
                        <CardItemTitleStyle {...this.props}>
                            <h3>{this.props.item}</h3>
                        </CardItemTitleStyle>
                        {this.renderFlexValuesDisplay(this.props.item)}
                    </div>
                </ItemCardStyle>
            </div>
        );
    }
}

export default ItemCardDisplay;

const CardItemTitleStyle = styled.div`
    height: 25px;
    width: 25px;
    line-height: 25px;
    background-color: ${globalStyle.white};
    margin: 0 auto 15px auto;
    // margin-right: auto;
    // margin-left: auto;
    border-radius: 50%;
    // margin-bottom: 15px;
`

const ItemCardStyle = styled.div`
    display: flex;
    text-align: center;
    font-size: 10pt;
    color: ${globalStyle.mainColor}
    h3 {
        font-size: 14pt;
        font-family: ${globalStyle.titleFont};
        // color: ${props => props.bgColor};
        color: ${globalStyle.childPropColors.main}
        font-size: 12pt;
    }
    .itemCard {
        display: inline-block;
        width: 85%;
        margin: 20px 0;
        padding: 20px;
        background-color: ${props => props.bgColor};
    }
    .item {
        // background-color: orange;
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
    }
    .property {
        display: inline-block;
        float: left;
        text-align: right;
        margin-right: 10px;
    }
    .dropdown {
        float:right;
    }
`