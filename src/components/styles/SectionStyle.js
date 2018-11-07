import styled from 'styled-components';
import { globalStyle } from '../../globalStyle';

export const SectionStyle = styled.div`
    margin: 50px 0 ;
    font-family: ${globalStyle.mainFont}
    border: 1px solid ${props => props.color}
    padding: 20px 30px;

    h1 {
        text-align: center;
        color: white;
        font-family: ${globalStyle.mainFont}
        font-size: 12pt;
        letter-spacing: .3rem;
        color: ${props => props.color}
    }
    .section {
        font-family: ${globalStyle.mainFont}
        border: 2px solid #3d424c;
        margin-top: 20px;
        padding: 20px;
        background-color: ${globalStyle.bgColorDark};
    }
`