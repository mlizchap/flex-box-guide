import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../globalStyle';

class ChildPropsDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            contentDisplay: "none",
            currentNumber: 1
         };
    }
    showContent = () => {
        this.setState({ contentDisplay: "block" })
    }
    hideContent = () => {
        this.setState({ contentDisplay: "none" })
    }
    setCurrentNumber = (e) => {
        this.setState({ currentNumber: e.target.innerHTML}, () => this.props.handleSelectNumber(this.props.letter, this.state.currentNumber))
    }
    render() {
        return (
            <DropDownStyle showContent={this.state.contentDisplay} bgColor={this.props.bgColor}>
                <h3>{this.props.letter}</h3>
                <div onMouseEnter={this.showContent} onMouseLeave={this.hideContent}>
                    <button>
                        {this.state.currentNumber} <span className="arrow">&#9660;</span>
                    </button>
                    <div className="dropDownContent">
                        { Array.from({length:5}, (_, i) => <div onClick={this.setCurrentNumber} key={i}>{i + 1}</div>) }
                    </div>
                </div>
            </DropDownStyle>
        );
    }
}

export default ChildPropsDropDown;

const DropDownStyle = styled.div`
    background-color: ${props => props.bgColor};
    padding: 10px;
    width: 50px;
    text-align: center;
    margin-bottom: 20px;
    display: inline-block;
    margin: 20px;
    border-radius: 2px;
    button {
        width: 50px;
        background-color: ${globalStyle.darkgray};
        color: ${props => props.bgColor};
    }
    .dropDownContent {
        display: ${props => props.showContent}
        position: absolute;
        background-color: ${globalStyle.lightgray};
        width: 50px;
        margin-right: auto;
        margin-left: auto;
        z-index: 3;
    }
    .arrow {
        float: right
    }
`