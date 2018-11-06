import React, { Component } from 'react';

import ChildPropsItem from './ChildPropsItem/ChildPropsItem';
import resizable from '../../resizable';
import { globalStyle } from '../../globalStyle';
import { flexBoxData } from '../static/flexBoxData';

class ChildPropsItemContainer extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.flexBoxDataItems.map(item => {
                    return (
                        <ChildPropsItem 
                            key={item} 
                            {...this.props}
                            flexGrow={this.props.flexGrow[`${item}`]} 
                            flexShrink={this.props.flexShrink[`${item}`]}
                            letter={item} 
                            bgColor={globalStyle.childPropColors[`${item}`]}
                        />
                    )
                })}
            </React.Fragment>
        );
    }
}

export default resizable(ChildPropsItemContainer);