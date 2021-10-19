//import { Button, createTheme, darken, styled } from '@mui/material';
import { Button, styled } from '@mui/material';
import { css } from '@mui/styled-engine';

const BotonMUI = styled(Button)`
    width: 200px;
    height: 45px;
    text-transform: none;
    color: #fff;

    ${(props) =>
        props.buttonContained &&
        css`
            background-color: #007a5e;
            width: 170px;
            height: 45px;
            background-color: #009673;

            &: hover;
        `}

    ${(props) =>
        props.buttonOutlined &&
        css`
            width: 170px;
            height: 45px;
            border-color: #fff;
            color: #fff;

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
                border-color: #fff;
            }
        `}

    ${(props) =>
        props.buttonContainedHeader &&
        css`
            width: 170px;
            height: 45px;
            background-color: rgba(26, 64, 76, 0.6);

            &:hover {
                background-color: rgba(26, 64, 76, 0.6);
            }
        `}

    ${(props) =>
        props.buttonContainedSmall &&
        css`
            width: 110px;
            height: 40px;
            background-color: #009673;

            &:hover {
                background-color: #007a5e;
            }
        `}

    ${(props) =>
        props.buttonContainedHeader &&
        css`
            width: 170px;
            height: 45px;
            background-color: rgba(26, 64, 76, 0.6);

            &:hover {
                background-color: rgba(26, 64, 76, 0.6);
            }
        `}
`;
const ButtonNuevo = styled(Button)`
    position: absolute;
    width: 78px;
    height: 28px;
    left: 1282px;
    top: 453px;

    background: #f37d63;
    border-radius: 5px;
`;

export { BotonMUI, ButtonNuevo };
