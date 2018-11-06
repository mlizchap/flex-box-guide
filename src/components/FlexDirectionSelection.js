import React, { Component } from 'react';
import styled from 'styled-components';
import { globalStyle } from '../globalStyle';

class FlexDirectionSelection extends Component {
    render() {
        return (
            <FlexDirectionSelectionStyle>
                flex-direction: {this.props.flexDirection}<br />
                <button onClick={this.props.handleChange}>change directions</button>
            </FlexDirectionSelectionStyle>
        );
    }
}

export default FlexDirectionSelection;

const FlexDirectionSelectionStyle = styled.div`
    width: 100%;
    background-color: ${globalStyle.mediumgray};
    color: ${globalStyle.highlight2}
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
`