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
        if (windowSize < 800) {
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
            <ItemCardContainerStyle>
                {(this.state.isMobile) ? this.renderMobileView() : this.renderDesktopView()}
            </ItemCardContainerStyle>
        )

    }
}

const ItemCardContainerStyle = styled.div`
    display: flex;
    justify-content: space-between;
`

export default ItemInfoCardContainer;