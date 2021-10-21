import { Grid, Typography } from '@mui/material';
import styled, { css } from 'styled-components';

const TituloBienvenida = styled(Grid)`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Titulos = styled(Typography)`
    color: #000;
    font-weight: medium;

    ${(props) =>
        props.centrar &&
        css`
            text-align: center;
        `}

    ${(props) =>
        props.blanco &&
        css`
            color: #fff;
        `}

	${(props) =>
        props.tituloGrande &&
        css`
            font-size: 2.3em;
        `}

    ${(props) =>
        props.tituloBold &&
        css`
            font-weight: bold;
        `}

    ${(props) =>
        props.tituloChico &&
        css`
            font-size: 1.875em;
        `}

    ${(props) =>
        props.tituloLight &&
        css`
            font-weight: lighter;
        `}

    ${(props) =>
        props.tituloMarginBotton &&
        css`
            margin-bottom: 30px;
        `}
`;
const TituloNuevo2 = styled(Typography)`
    margin-bottom: 30px;
    position: absolute;
    width: 156px;
    height: 19px;
    left: 358px;
    top: 424px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
`;

const TituloNuevo = styled(Typography)`
    position: absolute;
    width: 156px;
    height: 19px;
    left: 358px;
    top: 305px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #000000;
`;

const TituloAnioAprobacion = styled(Typography)`
    position: absolute;
    width: 156px;
    height: 19px;
    left: 744px;
    top: 424px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    color: #000000;
`;

const TituloCargaHoraria = styled(Typography)`
    position: absolute;
    width: 156px;
    height: 19px;
    left: 917px;
    top: 424px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #000000;
`;
const NotaAprobacion = styled(Typography)`
    position: absolute;
    width: 156px;
    height: 19px;
    left: 1090px;
    top: 424px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    color: #000000;
`;
const ProgramaMateria = styled(Typography)`
    position: absolute;
    width: 260px;
    height: 19px;
    left: 1282px;
    top: 424px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    color: #000000;
`;

const UniversidadOrigen = styled(Typography)`
    position: absolute;
    width: 156px;
    height: 19px;
    left: 358px;
    top: 541px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #000000;
`;

export {
    TituloBienvenida,
    Titulos,
    TituloNuevo,
    TituloNuevo2,
    TituloAnioAprobacion,
    TituloCargaHoraria,
    NotaAprobacion,
    ProgramaMateria,
    UniversidadOrigen
};
