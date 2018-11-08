import React, { Component } from 'react';
import styled from 'styled-components';

import {globalStyle} from '../../globalStyle'
import DropDownMenu from '../DropDownMenu';


const contents=["PARENT PROPERTIES", "justify-content", "align-items", "align-content", "flex-wrap", "CHILD PROPERTIES", "flex-grow", "flex-shrink", "flex-basis", "align-self", "order"]
const hrefs = ["parentProperties", "justifyContent", "alignItems", "alignContent", "flexWrap", "childProperties", "flex", "flex", "flex", "alignSelf", "order"]

const sections = [
    {
        id: 4235345,
        title: "PARENT PROPERTIES",
        type: "header",
        href: "parentProperties",
        color: "green"
    },
    {
        id: 23452345,
        title: "justify-content",
        type: "subheader",
        href: "justifyContent",
        color: "green"
    },
    {
        id: 234523452,
        title: "align-items",
        type: "subheader",
        href: "alignItems",
        color: "green"
    },
    {
        id: 5674673452,
        title: "align-content",
        type: "subheader",
        href: "alignContent",
        color: "green"
    },
    {
        id: 1234125,
        title: "flex-wrap",
        type: "subheader",
        href: "flexWrap",
        color: "green"
    },
    {
        id: 542312,
        title: "CHILD PROPERTIES",
        type: "header",
        href: "childProperties",
        color: "blue"
    },
    {
        id: 1234665,
        title: "flex-grow",
        type: "subheader",
        href: "flex",
        color: "blue"
    },
    {
        id: 423523422,
        title: "flex-shrink",
        type: "subheader",
        href: "flex",
        color: "blue"
    },
    {
        id: 954234,
        title: "flex-basis",
        type: "subheader",
        href: "flex",
        color: "blue"
    },
    {
        id: 6534433,
        title: "align-self",
        type: "subheader",
        href: "alignSelf",
        color: "blue"
    },
    {
        id: 11,
        title: "order",
        type: "subheader",
        href: "order",
        color: "blue"
    },
]

class GoTo extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }
    goToSelected = (content) => {
        sections.map(i => console.log(i))
        //console.log(sections.indexOf())

        //let contentIndex = contents.indexOf(content);
        //console.log(`#${hrefs[contentIndex]}`)
        //window.location.href= `#${hrefs[contentIndex]}`;
        //window.scrollBy(0, -85); 
    }
    renderContent = () => {
        return sections.map((section) => {
            return section.title
            // console.log(section.title)
        //    return (
        //         <a key={section.id} href={`#${section.href}`} style={{ color: section.color, textDecoration: 'none' }}>
        //             {section.title}
        //         </a>
        //    )
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
                    contentItems={this.renderContent()}
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