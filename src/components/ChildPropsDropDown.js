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
    }
]

class ChildPropsDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentProp: "flexGrow",
            display: {
                flexGrow: "none",
                flexShrink: "none"
            },
            currentNumber: {
                flexGrow: 1,
                flexShrink: 1
            }
         };
    }
    showContent = (selectedProp) => {
        console.log(selectedProp)
        this.setState({ 
            currentProp: selectedProp,
            display: (selectedProp === "flexGrow") ? { flexGrow: "block", flexShrink: "none" } :  { flexGrow: "none", flexShrink: "block" }
        })
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
                            <div key={item.camelCaseTitle}>
                                {item.kabobTitle}
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
                        
                    {/* <div>
                        flex-grow:
                        <div className="dropDownContent" onMouseEnter={() => this.showContent()} onMouseLeave={() => this.hideContent()}>
                            <button>
                                {this.state.currentNumber.flexGrow} <span className="arrow">&#9660;</span>
                            </button>

                            <ContentDisplay showContent={this.state.display.flexGrow} >
                                { Array.from({length:5}, (_, i) => <div onClick={this.setNumber} key={i}>{i + 1}</div>) }
                            </ContentDisplay>
                        </div>
                    </div> */}
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