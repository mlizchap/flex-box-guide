import React, { Component } from 'react';  
import styled from 'styled-components'; 

import FlexDisplayContainer from './FlexDisplayContainer';
import ItemInfoCardContainer from './ItemInfoCardContainer';
import { globalStyle } from '../../globalStyle';

const data = {
    defaultValues: {
        flexShrink: {a: 1, b: 1, c: 1},
        flexGrow: {a: 1, b: 1, c: 1},
        flexBasis: {a: "auto", b: "auto", c: "auto"},
        alignSelf: {a: "auto", b: "auto", c: "auto"},
        order: {a: 1, b: 1, c:1}
    },
    items: ["a", "b", "c"],
    growShrinkbasis: [
        {
            property: "flex-grow",
            camelCaseTitle: "flexGrow",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1,
            color: "orange"
        },
        {
            property: "flex-shrink",
            camelCaseTitle: "flexShrink",
            content: [0, 1, 2, 3, 4, 5],
            defaultValue: 1,
            color: "navy"
        },
        {
            property: "flex-basis",
            camelCaseTitle: "flexBasis",
            content: ["20%", "33%", "40%", "60%", "auto", "content"],
            defaultValue: "auto",
            color: "yellow"
        }
    ],
    alignSelf: [
        {
            property: "align-self",
            camelCaseTitle: "alignSelf",
            content: ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"],
            defaultValue: "auto",
            color: "yellow"
        }
    ],
    order: [
        {
            property: "order",
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
        return (
            <ChildPropertiesSectionStyle>
                
                <div>

                    <TitleStyle>
                        <h3 className="mainHeader">CHILD PROPERTIES</h3>
                    </TitleStyle>

                    <div className="section">
                        <h1>flex-grow | flex-shrink | flex-basis</h1>
                        <ItemInfoCardContainer 
                            flexPropInfo={data.growShrinkbasis}
                            items={data.items} 
                            handleSelect={this.updateNewValue}
                        />
                        <FlexDisplayContainer 
                            flexBoxDataItems={data.items} 
                            {...data.defaultValues}
                            flexShrink={this.state.flexShrink}
                            flexGrow={this.state.flexGrow}
                            flexBasis={this.state.flexBasis}
                            {...this.props}
                        /> 
                    </div>

                    <div className="section">
                        <h1>align-self</h1>
                        <ItemInfoCardContainer 
                            flexPropInfo={data.alignSelf}
                            items={data.items} 
                            handleSelect={this.updateNewValue}
                        />
                        <FlexDisplayContainer 
                            flexBoxDataItems={data.items} 
                            {...data.defaultValues}
                            alignSelf={this.state.alignSelf}
                            {...this.props}
                        /> 
                    </div>

                    <div className="section">
                        <h1>order</h1>
                        <ItemInfoCardContainer 
                            flexPropInfo={data.order}
                            items={data.items} 
                            handleSelect={this.updateNewValue}
                        />
                        <FlexDisplayContainer 
                            flexBoxDataItems={data.items} 
                            {...data.defaultValues}
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
    margin: 50px 0 ;
    font-family: ${globalStyle.mainFont}
    border: 1px solid ${globalStyle.childPropColors.main}
    padding: 20px 30px;

    h1 {
        text-align: center;
        color: white;
        font-family: ${globalStyle.mainFont}
        font-size: 12pt;
        letter-spacing: .3rem;
        color: ${globalStyle.childPropColors.b}
    }
    .section {
        font-family: ${globalStyle.mainFont}
        border: 2px solid #3d424c;
        margin-top: 20px;
        padding: 20px;
        background-color: ${globalStyle.bgColorDark};
    }
`

const TitleStyle = styled.div`
    .mainHeader {
        color: ${globalStyle.childPropColors.main}
        font-family: ${globalStyle.mainFont}
        font-size: 18pt;
        padding: 10px;
        display: inline-block;
        font-family: ${globalStyle.titleFont};
    }
`