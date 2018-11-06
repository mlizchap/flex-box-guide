import React, { Component } from 'react';
import DropDownMenu from './DropDownMenu';
import styled from 'styled-components';

const numberContent = [0, 1, 2, 3, 4, 5]
const letter=["a", "b", "c"];

const data = {
    items: ["a", "b", "c"],
    
    flexPropInfo: [
        {
            title: "flex-basis",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1
        },
        {
            title: "flex-shrink",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1
        },
        {
            title: "flex-shrink",
            content: ["20%", "33%", "40%", "60%", "auto", "content"],
            defaultValue: "33%"
        }
    ]
    
}


    


class ChildPropItemInfoDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            display: {
                flexGrow: "none",
                flexShrink: "none",
                flexBasis: "none"
            },
            currentNumber: {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: '30px'
            }
         };
    }
    selectItem = (selected) => {
        console.log(selected)
    }
    renderFlexValuesDisplay = () => {
        return data.flexPropInfo.map(item => {
            return (
               <div className="item">
                   <span className="title">{item.title}:</span>
                   <DropDownMenu  contentItems={item.content} defaultValue={item.defaultValue} width={100}/>
               </div>
            )
       })
    }
    render() {
        return (
            <ChildPropItemInfoDisplayStyle>
                {data.items.map(item => {
                    return (
                        <div>
                            <h3>{item}</h3>
                            {this.renderFlexValuesDisplay()}
                        </div>
                    )
                })}


            </ChildPropItemInfoDisplayStyle>
        );
    }
}

export default ChildPropItemInfoDisplay;

const ChildPropItemInfoDisplayStyle = styled.div`
    background-color: red;
    width: 250px;
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
    // div {
    //     margin-top: 5px;
    // }
`