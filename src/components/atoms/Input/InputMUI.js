import styled from 'styled-components';
import { Grid, TextField } from '@mui/material';

const InputMUI = styled(TextField)`
    outline: 1px;
    border: 0;
    width: 400px;
    height: 54px;
`;

const ContenedorInputs = styled(Grid)`
    margin: 0 auto;
    padding: 6px 0;
    display: inline-block;
    text-align: center;
`;

const InputFormulario = styled(TextField)`
    position: absolute;
    width: 350px;
    height: 28px;
    left: 358px;
    top: 337px;

    background: #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
`;

const InputFormulario2 = styled(TextField)`
    position: absolute;
    width: 350px;
    height: 28px;
    left: 358px;
    top: 453px;

    background: #ffffff;

    box-sizing: border-box;
    border-radius: 5px;
`;

const AnioAprobacion = styled(TextField)`
    position: absolute;
    width: 76px;
    height: 28px;
    left: 744px;
    top: 453px;

    background: #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
`;
const CargaHoraria = styled(TextField)`
    position: absolute;
    width: 76px;
    height: 28px;
    left: 917px;
    top: 453px;

    background: #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
`;
const NotaAprobacion2 = styled(TextField)`
    position: absolute;
    width: 76px;
    height: 28px;
    left: 1090px;
    top: 453px;

    background: #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
`;
const UniversidadOrigInput = styled(TextField)`
    position: absolute;
    width: 350px;
    height: 28px;
    left: 358px;
    top: 570px;

    background: #ffffff;
    box-sizing: border-box;
    border-radius: 5px;
`;

export {
    InputMUI,
    ContenedorInputs,
    InputFormulario,
    InputFormulario2,
    AnioAprobacion,
    CargaHoraria,
    NotaAprobacion2,
    UniversidadOrigInput
};
