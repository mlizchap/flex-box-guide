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
        href: "#parentProperties",
        color: "green"
    },
    {
        id: 23452345,
        title: "\xa0\xa0\xa0justify-content",
        type: "subheader",
        href: "#justifyContent",
        color: "green"
    },
    {
        id: 234523452,
        title: "\xa0\xa0\xa0align-items",
        type: "subheader",
        href: "#alignItems",
        color: "green"
    },
    {
        id: 5674673452,
        title: "\xa0\xa0\xa0align-content",
        type: "subheader",
        href: "#alignContent",
        color: "green"
    },
    {
        id: 1234125,
        title: "\xa0\xa0\xa0flex-wrap",
        type: "subheader",
        href: "#flexWrap",
        color: "green"
    },
    {
        id: 542312,
        title: "CHILD PROPERTIES",
        type: "header",
        href: "#childProperties",
        color: "blue"
    },
    {
        id: 1234665,
        title: "\xa0\xa0\xa0flex-grow",
        type: "subheader",
        href: "#flex",
        color: "blue"
    },
    {
        id: 423523422,
        title: "\xa0\xa0\xa0flex-shrink",
        type: "subheader",
        href: "#flex",
        color: "blue"
    },
    {
        id: 954234,
        title: "\xa0\xa0\xa0flex-basis",
        type: "subheader",
        href: "#flex",
        color: "blue"
    },
    {
        id: 6534433,
        title: "\xa0\xa0\xa0align-self",
        type: "subheader",
        href: "#alignSelf",
        color: "blue"
    },
    {
        id: 11,
        title: "\xa0\xa0\xa0order",
        type: "subheader",
        href: "#order",
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
        //console.log(content.replace(/&nbsp;/gi,''));
        const contentNoWhitespace = content.replace(/&nbsp;/gi,'')
        const currentContentHref = sections.filter(i => contentNoWhitespace === i.title.trim())[0].href;

        window.location.href = currentContentHref;
        window.scrollBy(0, -85); 
    }
    renderContent = () => {
        console.log(this)
        return sections.map((section) => {
            return section.title
            // return (section.type === 'subheader') ? `\xa0\xa0\xa0\xa0${section.title}` : section.title
           
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
                    contentFontColor={globalStyle.mainColor}
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