import React, { Component } from 'react';

import ChildPropsItem from './ChildPropsItem';
import resizable from './resizable';
import { globalStyle } from '../globalStyle';

class ChildPropsItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flexGrow: {
                a: 1,
                b: 1, 
                c: 1
            }            
         };
    }
    render() {
        console.log(this.props.flexGrow.a)
        return (
            <React.Fragment>
                <ChildPropsItem flexGrow={this.props.flexGrow.a} letter="a" bgColor={globalStyle.highlighta}/>
                <ChildPropsItem flexGrow={this.props.flexGrow.b} letter="b" bgColor={globalStyle.highlightb}/>
                <ChildPropsItem flexGrow={this.props.flexGrow.c} letter="c" bgColor={globalStyle.highlightc}/>
            </React.Fragment>
        );
    }
}

export default resizable(ChildPropsItemContainer);