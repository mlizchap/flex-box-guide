import React, { Component } from 'react';
import styled from 'styled-components';

import {globalStyle} from '../../globalStyle'
import DropDownMenu from '../DropDownMenu';


const contents=["PARENT PROPERTIES", "   justify-content", "align-items", "align-content", "flex-wrap", "CHILD PROPERTIES", "flex-grow", "flex-shrink", "flex-basis", "align-self", "order"]
const hrefs = ["parentProperties", "justifyContent", "alignItems", "alignContent", "flexWrap", "childProperties", "flex", "flex", "flex", "alignSelf", "order"]
class GoTo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }
    goToSelected = (content) => {
        let contentIndex = contents.indexOf(content);
        console.log(`#${hrefs[contentIndex]}`)
        window.location.href= `#${hrefs[contentIndex]}`;
        window.scrollBy(0, -85); 
    }
    renderContent = () => {
        return contents.map((contentItem,index) => {
           return (
                <a key={index} href={`#${hrefs[index]}`}>
                    {contentItem}
                </a>
           )
        })
    }
    handleScroll = (e) => { }
    render() {
        return (
            <GoToStyle>
                <div>{this.props.curr}</div>
                <DropDownMenu 
                    width={150}
                    fontSize="10pt"
                    padding="5px"
                    font={globalStyle.titleFont}
                    buttonColor={globalStyle.childPropColors.c}
                    buttonFontColor={globalStyle.childPropColors.main}
                    contentItems={contents}
                    defaultValue="Go To"
                    handleSelect={this.goToSelected}
                    displayCurrentOnTop={false}
                />
                {/* <div onScroll={this.scroll}>SCROLL</div> */}
            </GoToStyle>
        );
    }
}

export default GoTo;

const GoToStyle = styled.div`
    align-self: center;
`