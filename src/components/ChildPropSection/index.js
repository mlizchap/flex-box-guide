import React, { Component } from 'react';

import FlexDisplayBox from '../FlexDisplayBox'

class ChildPropSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <FlexDisplayBox {...this.props} />
            </div>
        );
    }
}

export default ChildPropSection;