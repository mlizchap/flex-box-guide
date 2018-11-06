import React, { Component } from 'react';
import styled from 'styled-components';

import { globalStyle } from '../globalStyle';
const ResizeBox = styled.div`
    display: 'inline-block';
    #box {
        position: relative;
        background-color: ${globalStyle.darkgray};
        color: white;
        z-index: 2;
        display:flex;
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
        z-index: 2;
    }
`
export default (ChildComponent, divWidth) => {
    class Resizable extends Component {
        constructor(props) {
            super(props);
            this.state = {
                width: '90%',
                height: '150px',
            }
            this.boxRef = React.createRef();
            this.childCompRef = React.createRef();
        }
        initialiseResize = (e) => {
            
            window.addEventListener('mousemove', this.startResizing, false);
            window.addEventListener('mouseup', this.stopResizing, false);
        }
        startResizing = (e) => {
            console.log(e.clientY)
            console.log(parseInt(this.boxRef.current.style.height))
            
            this.setState({
                width: (e.clientX - this.boxRef.current.offsetLeft) + 'px',
                height: (e.clientY - 200) + 'px'
            })
        }
        stopResizing = (e) => {
            window.removeEventListener('mousemove', this.startResizing, false);
            window.removeEventListener('mouseup', this.stopResizing, false);
        }
        render() {
            
            return (
                <ResizeBox>
                    <div id="box" ref={this.boxRef} style={{width: this.state.width, height: this.state.height}}>
                    <ChildComponent {...this.props} ref={this.childCompRef}  />
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

