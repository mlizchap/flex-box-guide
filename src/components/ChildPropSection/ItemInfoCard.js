
import React, { Component } from 'react';
import DropDownMenu from '../DropDownMenu';
import styled from 'styled-components';
import { globalStyle } from '../../globalStyle'

class ItemCardDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isMobile: true,
            currentValues: {
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: '30px',
                alignSelf: 'auto'
            },
            childSelected: "a"
         };
    }
    updateDimensions = (windowSize) => {
        if (windowSize < 800) {
            this.setState({ isMobile: true })
        } else {
            this.setState({ isMobile: false })
        }
    }    
    componentDidMount = () => {
        window.addEventListener("resize", () => this.updateDimensions(window.innerWidth) );
    }
    componentWillMount = () => {
        this.updateDimensions(window.innerWidth);
    }
    selectItem = (selectedValue, title, itemVal) => {
        console.log(selectedValue, title, itemVal)
        if (this.state.isMobile) {
            this.props.handleSelect(selectedValue, title, this.state.childSelected)
        } else {
            this.props.handleSelect(selectedValue, title, itemVal)
        }
       
    }
    selectChild = (childSelected) => {
        this.setState({ childSelected })
    }
    renderFlexValuesDisplay = (itemVal) => {
        return this.props.propertyValuesForCard.map(item => {
            return (
               <div className="item" key={item.title}>
                   <span className="property">
                        {item.title}:
                    </span>
                   <span className="dropdown">
                   <DropDownMenu  
                        handleSelect={(selected) => this.selectItem(selected, item.camelCaseTitle, itemVal)} 
                        contentItems={item.content} 
                        defaultValue={item.defaultValue} 
                        width={100}
                        font={globalStyle.mainFont}
                    />
                    </span>
               </div>
            )
       })
    }
    renderMobileDropDownItemSelect = () => {
        return (
            <div>
                <DropDownMenu  
                    handleSelect={(selected) => this.selectChild(selected)} 
                    contentItems={["a", "b", "c"]}
                    defaultValue="a"
                    width={70}
                    font={globalStyle.mainFont}
                    />
            </div>
        )
    }
    renderDeskTopItemDisplay = () => {
        return (
            <CardItemTitleStyle {...this.props}>
                <h3>{this.props.item}</h3>
            </CardItemTitleStyle>
        )
    }
    render() {
        return (
            <ItemCardStyle bgColor={globalStyle.childPropColors[`${this.props.item}`]}>
                <div className="itemCard">
                    {(!this.state.isMobile) ? 
                        this.renderDeskTopItemDisplay() : this.renderMobileDropDownItemSelect()}
                    {this.renderFlexValuesDisplay(this.props.item)}
                </div>
            </ItemCardStyle>
        );
    }
}

export default ItemCardDisplay;

const CardItemTitleStyle = styled.div`
    height: 25px;
    width: 25px;
    line-height: 25px;
    background-color: ${globalStyle.white};
    margin: 0 auto 15px auto;
    // margin-right: auto;
    // margin-left: auto;
    border-radius: 50%;
    // margin-bottom: 15px;
`

const ItemCardStyle = styled.div`
    display: flex;
    text-align: center;
    font-size: 10pt;
    color: ${globalStyle.mainColor}
    h3 {
        font-size: 14pt;
        font-family: ${globalStyle.titleFont};
        color: ${globalStyle.childPropColors.main}
        font-size: 12pt;
    }
    .itemCard {
        display: inline-block;
        width: 85%;
        margin: 20px 0;
        padding: 20px;
        background-color: ${props => props.bgColor};
    }
    .item {
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        font-family: ${globalStyle.mainFont}
    }
    .property {
        display: inline-block;
        float: left;
        text-align: right;
        margin-right: 10px;
    }
    .dropdown {
        float:right;
    }
`