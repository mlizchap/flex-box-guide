import React, { Component } from 'react';
import styled from 'styled-components';

import FlexDisplayItem from './FlexDisplayItem';
import resizable from '../resizable';
import { globalStyle } from '../../globalStyle';

class FlexDisplayContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heights: []
        }
    }
    componentDidMount = () => {
        this.setState({ heights: Array.from({length: 10}, (_, i) => this.getRandomValue(25, 60)) })
    }
    getRandomValue = (min,max) => {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    render() {
        return (
            <React.Fragment>
            <HorizantalAxis {...this.props}>
                <div className="horizantalAxisContent">
                    {(this.props.flexDirection === "row" || this.props.flexDirection === "row-reverse") ?
                        <span>MAIN AXIS</span> : <span>CROSS AXIS</span>
                    }
                   
                </div>
            </HorizantalAxis>

            <OuterItemContainerStyle {...this.props}>
                <VerticalAxis {...this.props}>
                    <div className="verticalAxisContent">
                        {(this.props.flexDirection === "row" || this.props.flexDirection === "row-reverse") ?
                            <span>CROSS AXIS</span> : <span>MAIN AXIS</span>
                        }
                    </div>
                </VerticalAxis>

                <InnerItemContainerStyle {...this.props}>
                {/* <Items {...this.props}> */}
                    {this.props.flexBoxDataItems.map((item,index) => {
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
                                height={this.state.heights[index]}
                            />
                        )
                    })}
                </InnerItemContainerStyle>
            </OuterItemContainerStyle>
            
            </React.Fragment>
        );
    }
}

export default resizable(FlexDisplayContainer);

const OuterItemContainerStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background-color: ${globalStyle.bgColorLight};
`
const InnerItemContainerStyle = styled.div`
    display: flex;
    width: 100%;
    // flex-wrap: wrap;
    flex-direction: ${props => props.flexDirection};
`

const HorizantalAxis = styled.div`
    width: 100%;
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
    font-family: ${globalStyle.titleFont};
    z-index: 1;
    .verticalAxisContent {
        text-align: center;
        padding-top: 5px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
`