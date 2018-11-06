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
<<<<<<< HEAD
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
=======
                    return <ChildPropsItem key={item} flexGrow={this.props.flexGrow[`${item}`]} letter={item} bgColor={globalStyle.childPropColors[`${item}`]}/>
>>>>>>> parent of 1b0d987... flex shrink working
                })}
            </React.Fragment>
        );
    }
}

export default resizable(ChildPropsItemContainer);