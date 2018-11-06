import React, { Component } from 'react';
import ItemInfoCard from './ItemInfoCard';
import styled from 'styled-components'

const data = {
    items: ["a", "b", "c"]
}

class ItemInfoCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ItemCardContainerStyle>
                { data.items.map(item => {
                    return <ItemInfoCard key={item} item={item} {...this.props}/>
                }) }
            </ItemCardContainerStyle>
        )

    }
}

const ItemCardContainerStyle = styled.div`
    display: flex;
`

export default ItemInfoCardContainer;