import React, { Component } from 'react';
import ItemInfoCard from './ItemInfoCard';
import styled from 'styled-components'

class ItemInfoCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ItemCardContainerStyle>
                { this.props.items.map(item => {
                    return <ItemInfoCard key={item} item={item} {...this.props}/>
                }) }
            </ItemCardContainerStyle>
        )

    }
}

const ItemCardContainerStyle = styled.div`
    display: flex;
    justify-content: space-between;
`

export default ItemInfoCardContainer;