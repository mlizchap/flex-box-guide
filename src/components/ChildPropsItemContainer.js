import React, { Component } from 'react';

import ChildPropsItem from './ChildPropsItem';
import resizable from './resizable';
import { globalStyle } from '../globalStyle';

class ChildPropsItemContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <ChildPropsItem flexGrow={this.props.flexGrow.a} letter="a" bgColor={globalStyle.childPropColors.a}/>
                <ChildPropsItem flexGrow={this.props.flexGrow.b} letter="b" bgColor={globalStyle.childPropColors.b}/>
                <ChildPropsItem flexGrow={this.props.flexGrow.c} letter="c" bgColor={globalStyle.childPropColors.c}/>
            </React.Fragment>
        );
    }
}

export default resizable(ChildPropsItemContainer);