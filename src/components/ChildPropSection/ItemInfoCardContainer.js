import React, { Component } from 'react';
import ItemInfoCard from './ItemInfoCard';
import styled from 'styled-components'

const items = ["a", "b", "c"]

class ItemInfoCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isMobile: true
         };
    }
    updateDimensions = (windowSize) => {
        if (windowSize < 1300) {
            this.setState({ isMobile: true })
        } else {
            this.setState({ isMobile: false })
        }
    }    
    componentDidMount = () => {
        window.addEventListener("resize", () => this.updateDimensions(window.innerWidth) );
    }
    componentWillMount = () => {
        this.updateDimensions(window.innerWidth);
    }
    renderMobileView = () => {
        return (
            <ItemInfoCard item="a" {...this.props} />
        )
    }
    renderDesktopView = () => {
        return (
            items.map(item => {
                return (
                    <ItemInfoCard  key={item} item={item} {...this.props} />
                )
            })
        )
    }
    render() {
        return (
            <ItemCardContainerStyle isMobile={this.state.isMobile}> 
                {(this.state.isMobile) ? this.renderMobileView() : <div className="desktopView">{this.renderDesktopView()}</div>}
            </ItemCardContainerStyle>
        )

    }
}

const ItemCardContainerStyle = styled.div`
    display: flex;
    justify-content: ${(props => props.isMobile) ? 'center' : 'space-between'};
    .desktopView {
        display: flex;
        justify-content: space-between;
        // background-color: orange;
        width: 100%;
    }

`

export default ItemInfoCardContainer;