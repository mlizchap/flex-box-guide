import React, { Component } from 'react';
import styled from 'styled-components';

import { globalStyle } from '../globalStyle';
const ResizeBox = styled.div`
    #box {
        position: relative;
        background-color: ${globalStyle.darkgray};
        color: white;
        display:flex;
        flex-direction: ${props => props.flexDirection};
        justify-content:center;
        align-items:center;
        border-radius: 10px;
    }
    #handle {
        background-color: #727272;
        padding: 5px;
        cursor: se-resize;
        position:absolute;
        right: 0;
        bottom: 0;
    }
`
export default (ChildComponent, divWidth) => {
    class Resizable extends Component {
        constructor(props) {
            super(props);
            this.boxRef = React.createRef();
            this.childCompRef = React.createRef();
        }
        initialiseResize = (e) => {
            window.addEventListener('mousemove', this.startResizing, false);
            window.addEventListener('mouseup', this.stopResizing, false);
        }
        startResizing = (e) => {
            this.boxRef.current.style.width = (e.clientX - this.boxRef.current.offsetLeft) + 'px'
            this.boxRef.current.style.height = (e.clientY - this.boxRef.current.offsetTop) + 'px'
        }
        stopResizing = (e) => {
            window.removeEventListener('mousemove', this.startResizing, false);
            window.removeEventListener('mouseup', this.stopResizing, false);
        }
        render() {
            return (
                <ResizeBox>
                    <div id="box" ref={this.boxRef} style={{width: this.props.width}}>
                    <ChildComponent {...this.props} ref={this.childCompRef} />
                    <div onMouseDown={this.initialiseResize} id="handle">
                            &#8690;
                        </div>
                    </div>
                </ResizeBox>
            )
        }
    }

    return Resizable;
}

