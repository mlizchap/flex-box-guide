import React, { Component } from 'react';

import FlexDisplayBox from '../FlexDisplayBox';
import FlexDisplayItem from '../FlexDisplayItem';
import { globalStyle } from '../../globalStyle';

class ChildPropSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <FlexDisplayBox 
                    itemColors={[globalStyle.childPropColors.a, globalStyle.childPropColors.b, globalStyle.childPropColors.c]}
                    itemAmount={3}
                    {...this.props} 
                />
            </div>
        );
    }
}

export default ChildPropSection;