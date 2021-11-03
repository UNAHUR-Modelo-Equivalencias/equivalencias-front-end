import { Grid, TextField, Input, styled } from '@mui/material';

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

const StandardInput = styled(TextField)`
    outline: 0px;
    border: 0;
    width: 100%;
    margin-top: 15px;
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
    input[type=number] {
        -moz-appearance: textfield;
    }
`;

const FileUploader = styled(Input) `
    input[type=file]::file-selector-button {
        display: none;
        font-family: Roboto;
        border: none;
        padding: 5px;
        width: 200px;
        border-radius: 5px;
        background-color: #F37D63;
        color: #fff;
    }
`;

export { InputMUI, ContenedorInputs, StandardInput, FileUploader };