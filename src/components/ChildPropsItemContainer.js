import React, { Component } from 'react';

import ChildPropsItem from './ChildPropsItem';
import resizable from './resizable';
import { globalStyle } from '../globalStyle';
import { flexBoxData } from '../static/flexBoxData';

class ChildPropsItemContainer extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.flexBoxDataItems.map(item => {
                    return <ChildPropsItem key={item} flexGrow={this.props.flexGrow[`${item}`]} letter={item} bgColor={globalStyle.childPropColors[`${item}`]}/>
                })}
            </React.Fragment>
        );
    }
}

export default resizable(ChildPropsItemContainer);