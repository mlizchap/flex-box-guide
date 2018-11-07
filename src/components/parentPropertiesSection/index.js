import React, { Component } from 'react';

import FlexDisplayContainer from '../FlexDisplayContainer';

class ParentPropertiesSection extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <FlexDisplayContainer {...this.props} />
            </div>
        );
    }
}

export default ParentPropertiesSection;