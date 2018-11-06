import React, { Component } from 'react';
import styled from 'styled-components';

class DropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            display: "none",
            currentContent: ""
         };
    }
    showContent = () => {
        console.log("hi")
        this.setState({ display: "block"})
    }
    hideContent = () => {
        this.setState({ display: "none"})
    }
    selectContent = (e) => {
        this.setState({ currentContent: e.target.innerHTML})
    }
    render() {
        return (
            <DropDownMenuStyle contentDisplay={this.state.display}>
                <div onMouseEnter={this.showContent} onMouseLeave={this.hideContent} className="dropDownContainer">
                    <button>
                        <span className="currentContent">{(this.state.currentContent) ? this.state.currentContent : this.props.defaultValue}</span>
                        <span className="arrow">&#9660;</span>
                    </button>
                    <div className="content">
                        {this.props.contentItems.map(item => {
                            return <div key={item} onClick={this.selectContent}>{item}</div>
                        })}
                    </div>
                </div>
            </DropDownMenuStyle>
        );
    }
}

export default DropDownMenu;

const DropDownMenuStyle = styled.div`
    .dropDownContainer {
        width: 100px;
    }
    .currentContent {
        display: inline-block;
        width: 55px;
        background-color: yellow;
    }
    button {
        width: 100px;
    }
    .content {
        position: absolute;
        z-index: 2;
        width: 100px;
        display: ${props => props.contentDisplay};
        background-color: purple;
        color: white;
    }
`