import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../globalStyle';

const flexBoxData = [
    {
        kabobTitle: "flex-grow",
        camelCaseTitle: "flexGrow"
    },
    {
        kabobTitle: "flex-shrink",
        camelCaseTitle: "flexShrink"
    },
    {
        kabobTitle: "flex-basis",
        camelCaseTitle: "flexBasis"
    }
]

class ChildPropsDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentProp: "flexGrow",
            display: {
                flexGrow: "none",
                flexShrink: "none",
                flexBasis: "none"
            },
            currentNumber: {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: 1
            }
         };
    }
    showContent = (selectedProp) => {
        console.log(selectedProp)
        this.setState({ 
            currentProp: selectedProp,
            display: {
                flexGrow: "none",
                flexShrink: "none",
                flexBasis: "none"
            }
            //display: (selectedProp === "flexGrow") ? { flexGrow: "block", flexShrink: "none" } :  { flexGrow: "none", flexShrink: "block" }
        }, () => this.setState({ display: {...this.state.display, [selectedProp]: "block"}}))
    }
    hideContent = (selectedProp) => {
        this.setState({ 
            currentProp: selectedProp,
            display: {...this.state.display, [selectedProp]: "none" }
        })    
    }
    setNumber = (e, letter) => {
        this.setState(
            { currentNumber: {...this.state.currentNumber, [this.state.currentProp]: e.target.innerHTML}},
            () => this.props.handleNumberSelection(this.state.currentNumber[`${this.state.currentProp}`], this.state.currentProp, letter)
        )
    }

    render() {
        return (
            <DropDownStyle bgColor={this.props.bgColor}>
                <h3>{this.props.letter}</h3>
                    {flexBoxData.map(item => {
                        return (
                            <div key={item.camelCaseTitle} className="numberDisplay">
                                <span className="title">{item.kabobTitle}</span>
                                <div className="dropDownContent" onMouseEnter={() => this.showContent(item.camelCaseTitle)} onMouseLeave={() => this.hideContent(item.camelCaseTitle)}>
                                    <button>
                                        {this.state.currentNumber[`${item.camelCaseTitle}`]} <span className="arrow">&#9660;</span>
                                    </button>
        
                                    <ContentDisplay showContent={this.state.display[`${item.camelCaseTitle}`]} >
                                        { Array.from({length:5}, (_, i) => <div onClick={(e) => this.setNumber(e, this.props.letter)} key={i}>{i + 1}</div>) }
                                    </ContentDisplay>
                                </div>
                            </div>
                        )
                    })}
            </DropDownStyle>
        );
    }
}

export default ChildPropsDropDown;

const DropDownStyle = styled.div`
    background-color: ${props => props.bgColor};
    padding: 10px;
    width: 200px;
    text-align: center;
    margin-bottom: 20px;
    display: inline-block;
    margin: 20px;
    border-radius: 2px;
    .numberDisplay {
        // background-color: yellow;
        margin-top: 10px;
        text-align: left:
    }
    .title {
        display: inline-block;
        // background-color: orange;
        width: 100px;
    }
    button {
        display: inline-block;
        width: 50px;
        background-color: ${globalStyle.darkgray};
        color: ${props => props.bgColor};
    }
    .arrow {
        float: right
    }
    .dropDownContent {
        display: inline-block;
    }
`

const ContentDisplay = styled.div`
    display: ${props => props.showContent}
    position: absolute;
    z-index: 4;
    background-color: ${globalStyle.lightgray};
    width: 50px;
    margin-right: 90px;
    //display: block;

    
`