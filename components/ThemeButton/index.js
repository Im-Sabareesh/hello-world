import Styled from 'styled-components';
import { Button } from 'react-bootstrap';

const ThemedButton = Styled(Button)`
    font-family: Mulish;
    font-weight: 600;
    font-size: 18px;
    height: 47px;
    border: transparent;
    min-width: 120px;
    color: color('primary');
    border-radius: 28px;
    background: linear-gradient(90deg, #e06355 3.98%, #fea49a 93.98%);

    &.hover,
    &.active,
    &.focus {
        background: linear-gradient(90deg, #fea49a 3.98%, #e06355 93.98%);
        border: none;
    }
`;

export default ThemedButton;
