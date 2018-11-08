import React, { Component } from 'react';
import styled from 'styled-components';

import NavigationSection from './NavigationSection';
import ChildPropSection from './ChildPropSection';
import ParentPropertiesSection from './ParentPropSection';
import Header from './Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            direction: "row",
            currentProperty: ""
         };
    }
    componentDidMount = () => {
        // console.log("FLEXLOC", this.props.refs)
    }
    render() {
        return (
            <div>
                <Header />
                {/* <FlexDirectionChange 
                    handleSelect={(selectedItem) => this.setState({direction: selectedItem})} 
                /> */}
                <NavigationSection 
                    handleSelect={(selectedItem) => this.setState({direction: selectedItem})} 
                    // curr="something"
                />
                <ContentDisplay>
                    <ParentPropertiesSection flexDirection={this.state.direction} />
                    <ChildPropSection 
                        hasReachedTop={(val) => console.log(val) }
                        flexDirection={this.state.direction} 
                        {...this.props}
                    />
                </ContentDisplay> 
            </div>
        );
    }
}

export default App;

const ContentDisplay = styled.div`
    width: 80%;
    margin-right: auto;
    margin-left: auto;
`