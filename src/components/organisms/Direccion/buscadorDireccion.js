import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const materias = [
    { materia: 'Organizacion de computadoras', year: 1994 },
    { materia: 'Introduccion a la programacion', year: 1972 },
    { materia: 'Ingenieria de software', year: 1974 },
    { materia: 'Objetos1', year: 2008 },
    { materia: 'Ingles2', year: 1957 },
    { materia: "Mate1", year: 1993 },
    { materia: 'Ingles1', year: 1994 },
    
  ];
  const solicitantes = [
      { solicitante: 'Facundo Ferrara', year: 23 },
      { solicitante: 'Sebastian Montes de Oca', year: 24 },
      { solicitante: 'Lautaro', year: 24 },
      { solicitante: 'Emanuel', year: 30 },
    ];

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 400,  margintop: 10}}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={solicitantes.map((option) => option.solicitante)}
        renderInput={(params) => <TextField {...params} label="Buscar Solicitud" />}
      />
      {/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={materias.map((option) => option.materia)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      /> */}
    </Stack>
  );
}
