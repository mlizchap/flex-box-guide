import styled from 'styled-components';
import { globalStyle } from '../../globalStyle';

export const MainHeaderStyle = styled.div`
    .mainHeader {
        color: ${props => props.color}
        font-family: ${globalStyle.mainFont}
        font-size: 18pt;
        padding: 10px;
        display: inline-block;
        font-family: ${globalStyle.titleFont};
    }
`