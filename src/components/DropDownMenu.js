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
        this.setState(
            { currentContent: e.target.innerHTML }, 
            () => this.props.handleSelect(this.state.currentContent)
        )
    }
    render() {
        return (
            <DropDownMenuStyle contentDisplay={this.state.display} {...this.props}>
                <div onClick={this.showContent} onMouseLeave={this.hideContent} className="dropDownContainer">
                    <button>
                        <span className="currentContent">{(this.state.currentContent) ? this.state.currentContent : this.props.defaultValue}</span>
                        <span className="arrow">&#9660;</span>
                    </button>
                    <div className="content">
                        {this.props.contentItems.map(item => {
                            return <div key={item} className="item" onClick={this.selectContent}>{item}</div>
                        })}
                    </div>
                </div>
            </DropDownMenuStyle>
        );
    }
}

export default DropDownMenu;

const DropDownMenuStyle = styled.div`
    font-family: inherit;
    display: inline-block;
    .dropDownContainer {
        width: ${props => props.width}px;
    }
    .currentContent {
        display: inline-block;
        width: ${props => props.width/3}px;
        // background-color: orange;
    }
    button {
        width: ${props => props.width}px;
        background-color: ${props => props.buttonColor};
        // padding: 10px;
        font-size: ${props => props.fontSize};
        color: ${props => props.buttonFontColor}
    }
    .content {
        position: absolute;
        z-index: 2;
        width: ${props => props.width}px;
        display: ${props => props.contentDisplay};
        background-color: ${props => props.contentColor}
        color: ${props => props.contentFontColor};
        font-size: ${props => props.fontSize};
        font-family: inherit;
    }
    .item {
       padding: 5px;
       &:hover {
        background-color: ${props => props.contentHighlight}
    }
    }
    .arrow {
        float: right;
    }
`
DropDownMenu.defaultProps = {
    handleSelect: (selected) => console.log("you have chosen", selected)
}
DropDownMenuStyle.defaultProps = {
    width: '150',
    fontSize: '10pt',
    buttonColor: '#5e7999',
    buttonFontColor: `#edf5ff`,
    contentColor: `#dbdbdb`,
    contentFontColor: `#545454`,
    contentHighlight: `#f2f2f2`,
}