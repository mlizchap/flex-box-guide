import React, { Component } from 'react';
import styled from 'styled-components';

import { globalStyle } from '../globalStyle';

let seed = 1


const ResizeBox = styled.div`
    display: 'inline-block';
    #box {
        position: relative;
        z-index: 2;
        display:flex;
        flex-direction: column;
        // background-color: purple;
        justify-content:center;
        align-items:center;
    }
    #handle {
        background-color: #727272;
        padding: 5px;
        cursor: se-resize;
        position:absolute;
        right: 0;
        bottom: 0;
        z-index: 2;
        background-color: ${globalStyle.accent2}
        color: ${globalStyle.mainColor}
    }
`
export default (ChildComponent, divWidth) => {
    class Resizable extends Component {
        constructor(props) {
            super(props);
            this.state = {
                width: '100%',
                height: '220px',
            }
            this.boxRef = React.createRef();
            this.childCompRef = React.createRef();
        }
        getRandom = () => {
            var x = Math.sin(seed++) * 10000;
            return x - Math.floor(x)
        }
        initialiseResize = (e) => {
            window.addEventListener('mousemove', this.startResizing, false);
            window.addEventListener('mouseup', this.stopResizing, false);
        }
        startResizing = (e) => {  
            let maxPos = document.body.clientWidth - this.boxRef.current.offsetLeft;      

            console.log(this.getRandom())
            
            
            if (e.clientX < maxPos && e.clientX > 300) {
                this.setState({
                    width: (e.clientX - this.boxRef.current.offsetLeft + 10) + 'px',
                    height: (e.clientY - this.boxRef.current.getBoundingClientRect().top + 10) + 'px'
                })
            }

        }
        getWindowSize() {
            console.log(document.body.clientWidth)
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

