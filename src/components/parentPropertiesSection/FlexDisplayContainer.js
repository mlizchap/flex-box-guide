import React, { Component } from 'react';
import styled from 'styled-components';

// import FlexDisplayItem from './FlexDisplayItem';
import resizable from '../resizable';
import { globalStyle } from '../../globalStyle';
import FlexDisplayItem from './FlexDisplayItem';

class FlexDisplayContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flexDir: "row",
            heights: [],
        }
    }
    componentDidMount = () => {
        this.setState({ heights: Array.from({length: 10}, (_, i) => this.getRandomValue(25, 75)) })
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

            <ItemContainerStyle {...this.props}>
                <VerticalAxis {...this.props}>
                    <div className="verticalAxisContent">
                        {(this.props.flexDirection === "row" || this.props.flexDirection === "row-reverse") ?
                            <span>CROSS AXIS</span> : <span>MAIN AXIS</span>
                        }
                    </div>
                </VerticalAxis>
                
                <ItemListStyle {...this.props}>
                    { Array.from({length: this.props.itemAmount}, (_, i) => {
                        return (
                            <FlexDisplayItem 
                                key={i}
                                display={i+1}
                                height={this.state.heights[i]}
                            />
                        )
                    })}
                </ItemListStyle>


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
const ItemListStyle = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    width: 100%;

    // FLEX PROPERTIES
    justify-content: ${props => props.flexProperties.justifyContent};
    align-items: ${props => props.flexProperties.alignItems};
    flex-wrap: ${props => props.flexProperties.flexWrap};
    align-content: ${props => props.flexProperties.alignContent};
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
    z-index: 1;
    font-family: ${globalStyle.titleFont};
    .verticalAxisContent {
        text-align: center;
        padding-top: 5px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
    }
`