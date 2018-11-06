import React, { Component } from 'react';  
import styled from 'styled-components'; 

import FlexDisplayContainer from './FlexDisplayContainer';
import ItemInfoCardContainer from './ItemInfoCardContainer';
import { globalStyle } from '../../globalStyle';

const data = {
    items: ["a", "b", "c"],
    growShrinkbasis: [
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
    ],
    alignSelf: [
        {
            title: "align-self",
            camelCaseTitle: "alignSelf",
            content: ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"],
            defaultValue: "auto",
            color: "yellow"
        }
    ],
    order: [
        {
            title: "order",
            camelCaseTitle: "order",
            content: [1, 2, 3],
            defaultValue: 1,
        }
    ]
}       
                
            
        
    


class ChildPropertiesSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentProp: "",
                flexGrow: { a: 1, b: 1, c: 1},
                flexShrink: { a: 1, b: 1, c: 1},
                flexBasis: {a: 'auto', b: 'auto', c: 'auto'},
                alignSelf: {a: 'auto', b: 'auto', c: 'auto'},
                order: {a: 1, b: 1, c: 1}

        };
    }
    updateNewValue = (selectedValue, title, letter) => {
        console.log("Sel", title)
        this.setState(
            { [title]: {...this.state[`${title}`], [letter]: (title === "flexBasis" || title === "alignSelf" ? selectedValue : parseInt(selectedValue))}}, 
            () => console.log(this.state)
        )
    }
    render() {
        // { console.log(data.properties[0]) }
        return (
            <ChildPropertiesSectionStyle>
                <div style={{marginBottom: '200px'}}>
                    <div>
                        <h1>flex-grow | flex-shrink | flex-basis</h1>
                        <ItemInfoCardContainer 
                            flexPropInfo={data.growShrinkbasis}
                            items={data.items} 
                            handleSelect={this.updateNewValue}
                        />
                        <FlexDisplayContainer 
                            flexBoxDataItems={data.items} 
                            flexShrink={this.state.flexShrink}
                            flexGrow={this.state.flexGrow}
                            flexBasis={this.state.flexBasis}
                            alignSelf={this.state.alignSelf}
                            order={{a: 1, b: 1, c:1}}
                            {...this.props}
                        /> 
                    </div>

                    <div>
                        <h1>align-self</h1>
                        <ItemInfoCardContainer 
                            flexPropInfo={data.alignSelf}
                            items={data.items} 
                            handleSelect={this.updateNewValue}
                        />
                        <FlexDisplayContainer 
                            flexBoxDataItems={data.items} 
                            alignSelf={this.state.alignSelf}
                            flexShrink={this.state.flexShrink}
                            flexGrow={this.state.flexGrow}
                            flexBasis={this.state.flexBasis}
                            order={{a: 1, b: 1, c:1}}
                            {...this.props}
                        /> 
                    </div>

                    <div>
                        <h1>order</h1>
                        <ItemInfoCardContainer 
                            flexPropInfo={data.order}
                            items={data.items} 
                            handleSelect={this.updateNewValue}
                        />
                        <FlexDisplayContainer 
                            flexBoxDataItems={data.items} 
                            alignSelf={this.state.alignSelf}
                            flexShrink={this.state.flexShrink}
                            flexGrow={this.state.flexGrow}
                            flexBasis={this.state.flexBasis}
                            order={this.state.order}
                            {...this.props}
                        /> 
                    </div>
                </div>

            </ChildPropertiesSectionStyle>
        )
    }
}

export default ChildPropertiesSection;

const ChildPropertiesSectionStyle = styled.div`
    margin-top: 20px;
    font-family: ${globalStyle.mainFont}
    h1 {
        text-align: center;
        color: ${globalStyle.mainColor};
        font-family: ${globalStyle.titleFont}
    }
`