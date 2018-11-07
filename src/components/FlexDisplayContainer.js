import React, { Component } from 'react';
import styled from 'styled-components';

// import FlexDisplayItem from './FlexDisplayItem';
import resizable from './resizable';
import { globalStyle } from '../globalStyle';

class FlexDisplayContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flexDir: "row"
        }
    }
    render() {
        console.log("DIR", this.props.flexDirection)

        return (
            <React.Fragment>
            <HorizantalAxis {...this.props}>
                <div className="horizantalAxisContent">
                    {(this.props.flexDirection === "row" || this.props.flexDirection === "row-reverse") ?
                        <span>MAIN AXIS</span> : <span>CROSS AXIS</span>
                    }
                   
                </div>
            </HorizantalAxis>

            <ItemContainerStyle {...this.props}>
                <VerticalAxis {...this.props}>
                    <div className="verticalAxisContent">
                        {(this.props.flexDirection === "row" || this.props.flexDirection === "row-reverse") ?
                            <span>CROSS AXIS</span> : <span>MAIN AXIS</span>
                        }
                    </div>
                </VerticalAxis>

                {/* <Items {...this.props}>
                    {this.props.flexBoxDataItems.map(item => {
                        return (
                            <FlexDisplayItem 
                                key={item} 
                                flexGrow={this.props.flexGrow[`${item}`]} 
                                flexShrink={this.props.flexShrink[`${item}`]}
                                flexBasis={this.props.flexBasis[`${item}`]}
                                alignSelf={this.props.alignSelf[`${item}`]}
                                order={this.props.order[`${item}`]}
                                letter={item} 
                                bgColor={globalStyle.childPropColors[`${item}`]}
                                flexDisplay={this.props.flexDirection}
                            />
                        )
                    })}
                </Items> */}
            </ItemContainerStyle>
            
            </React.Fragment>
        );
    }
}

export default resizable(FlexDisplayContainer);

const ItemContainerStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: ${globalStyle.bgColorLight};
`
const Items = styled.div`
    display: flex;
    width: 100%;
    flex-direction: ${props => props.flexDirection};
`

const HorizantalAxis = styled.div`
    width: 100%;
    // background-color: ${globalStyle.mainAxisBgColor};
    background-color: ${props => (props.flexDirection === "row" || props.flexDirection === "row-reverse") ? globalStyle.mainAxisBgColor : globalStyle.crossAxisBgColor}
    color: ${props => (props.flexDirection === "row" || props.flexDirection === "row-reverse") ? globalStyle.mainAxisColor : globalStyle.crossAxisColor}
    padding: 2px 0;
    font-family: ${globalStyle.titleFont};
    .horizantalAxisContent {
        text-align: center;
    }
`

const VerticalAxis = styled.div`
    background-color: ${props => (props.flexDirection === "column" || props.flexDirection === "column-reverse") ? globalStyle.mainAxisBgColor : globalStyle.crossAxisBgColor}
    color: ${props => (props.flexDirection === "column" || props.flexDirection === "column-reverse") ? globalStyle.mainAxisColor : globalStyle.crossAxisColor}
    display: flex;
    flex-direction: row;
    flex-grow: content;
    height: 100%;
    // background-color: ${globalStyle.crossAxisBgColor};
    // color: ${globalStyle.crossAxisColor};
    font-family: ${globalStyle.titleFont};
    .verticalAxisContent {
        text-align: center;
        padding-top: 5px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
`