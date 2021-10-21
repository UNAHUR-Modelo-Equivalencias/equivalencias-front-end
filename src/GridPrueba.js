import { Grid, Input } from '@mui/material';
//import AddIcon from '@mui/icons-material/Add';
import { Header } from './Header';
import { GridTop } from './GridTop';
import { Titulos } from './components/atoms/Title/Titulos';
import { BotonMUI } from './components/atoms/Button/BotonMUI';
import React from 'react';
import {
    InputFormulario,
    ContenedorInputs,
    InputFormulario2,
    AnioAprobacion,
    CargaHoraria,
    NotaAprobacion2,
    UniversidadOrigInput
} from '../src/components/atoms/Input/InputMUI';
import {
    TituloNuevo,
    TituloNuevo2,
    TituloAnioAprobacion,
    TituloCargaHoraria,
    NotaAprobacion,
    ProgramaMateria,
    UniversidadOrigen
} from '../src/components/atoms/Title/Titulos';
import {
    Adjuntar,
    AniadirMateria,
    AgregarEquivalencia
} from '../src/components/atoms/Button/BotonMUI';

const GridPrueba = () => {
    return (
        <Grid container direction="column">
            <Grid item container>
                <Header />
            </Grid>

            <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ padding: '60px 0px' }}
            >
                <GridTop
                    item
                    container
                    xs={12}
                    sm={8}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Titulos component="h2" tituloGrande>
                            Formulario
                        </Titulos>
                    </Grid>

                    <Grid item>
                        <BotonMUI buttonContainedSmall variant="outlined">
                            Enviar
                        </BotonMUI>
                    </Grid>
                </GridTop>

                <GridTop
                    item
                    container
                    xs={12}
                    sm={8}
                    direction="row"
                    sx={{
                        height: '370px',
                        margin: '50px',
                        paddingTop: '25px',
                        paddingBottom: '25px'
                    }}
                >
                    <TituloNuevo centrar blanco tituloGrande>
                        Materia Solicitada:
                    </TituloNuevo>

                    <ContenedorInputs>
                        <InputFormulario
                            type="materia"
                            id="outlined-basic"
                            label="Materia"
                            variant="outlined"
                            margin="normal"
                        />
                    </ContenedorInputs>
                    <TituloNuevo2 centrar blanco tituloGrande>
                        Materia Aprobada:
                    </TituloNuevo2>

                    <ContenedorInputs>
                        <InputFormulario2
                            type="Matanza.."
                            id="outlined-basic"
                            label="Universidad:"
                            variant="outlined"
                            margin="normal"
                        />
                    </ContenedorInputs>

                    <TituloAnioAprobacion centrar blanco tituloGrande>
                        Anio de Aprobacion:
                    </TituloAnioAprobacion>

                    <ContenedorInputs>
                        <AnioAprobacion
                            type="Anio.."
                            id="outlined-basic"
                            label="Anio:"
                            variant="outlined"
                            margin="normal"
                        />
                    </ContenedorInputs>

                    <TituloCargaHoraria centrar blanco tituloGrande>
                        Carga Horaria:
                    </TituloCargaHoraria>

                    <ContenedorInputs>
                        <CargaHoraria
                            type="Carga Horaria"
                            id="outlined-basic"
                            label="Carga Horaria"
                            variant="outlined"
                            margin="normal"
                        />
                    </ContenedorInputs>

                    <NotaAprobacion centrar blanco tituloGrande>
                        NotaAprobacion:
                    </NotaAprobacion>

                    <ContenedorInputs>
                        <NotaAprobacion2
                            type="NotaAprobacion2"
                            id="outlined-basic"
                            label="Nota"
                            variant="outlined"
                            margin="normal"
                        />
                    </ContenedorInputs>

                    <ProgramaMateria centrar blanco tituloGrande>
                        Programa de la Materia
                    </ProgramaMateria>

                    <Adjuntar variant="outlined">Adjuntar</Adjuntar>

                    <UniversidadOrigen centrar blanco tituloGrande>
                        Universidad De Origen
                    </UniversidadOrigen>

                    <ContenedorInputs>
                        <UniversidadOrigInput
                            type="Universidad Origen"
                            id="outlined-basic"
                            label="Ingrese Universidad"
                            variant="outlined"
                            margin="normal"
                        />
                    </ContenedorInputs>

                    <AniadirMateria variant="outlined">
                        Aniadir Materia Aprobada font-size: xx-small
                    </AniadirMateria>

                    <AgregarEquivalencia variant="outlined">
                        Nueva Equivalencia{' '}
                    </AgregarEquivalencia>
                </GridTop>
            </Grid>
        </Grid>
    );
};

export { GridPrueba };
