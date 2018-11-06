import React, { Component } from 'react';
import DropDownMenu from './DropDownMenu';
import styled from 'styled-components';

const numberContent = [0, 1, 2, 3, 4, 5]
const letter=["a", "b", "c"];

const data = {
    items: ["a", "b", "c"],
    
    flexPropInfo: [
        {
            title: "flex-grow",
            camelCaseTitle: "flexGrow",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1
        },
        {
            title: "flex-shrink",
            camelCaseTitle: "flexShrink",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1
        },
        {
            title: "flex-basis",
            camelCaseTitle: "flexBasis",
            content: ["20%", "33%", "40%", "60%", "auto", "content"],
            defaultValue: "auto"
        }
    ]
    
}


    


class ChildPropItemInfoDisplay extends Component {
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
            <ChildPropItemInfoDisplayStyle>
                {data.items.map(item => {
                    return (
                        <div className="itemCard" key={item}>
                            <h3>{item}</h3>
                            {this.renderFlexValuesDisplay(item)}
                        </div>
                    )
                })}
            </ChildPropItemInfoDisplayStyle>
        );
    }
}

export default ChildPropItemInfoDisplay;

const ChildPropItemInfoDisplayStyle = styled.div`
    display: flex;
    text-align: center;
    .itemCard {
        margin: 20px;
        padding: 20px;
        background-color: red;
        // display: inline-block;
    }
    .title {
        display: inline-block;
        width: 100px;
        text-align: right;
        margin-right: 10px;
        // background-color: blue;
    }
    .item {
        margin-top: 5px;
    }
`