import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../globalStyle';

class FlexDirectionChange extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <FlexDirectionChangeStyle>
                flex-direction: {this.props.flexDirection}<br />
                <button onClick={this.props.handleChange}>change directions</button>
            </FlexDirectionChangeStyle>
        );
    }
}

export default FlexDirectionChange;

const FlexDirectionChangeStyle = styled.div`
    z-index: 100;
    width: 100%;
    background-color: ${globalStyle.mediumgray};
    color: ${globalStyle.highlight2}
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
`