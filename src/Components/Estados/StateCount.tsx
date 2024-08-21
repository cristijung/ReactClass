import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function StateCounter(): JSX.Element {
  const [contador, setContador] = useState<number>(0); //definindo os states dos componentes
  const [nome, setNome] = useState<string>(""); //definindo os states dos componentes

  const incrementarContador = (): void => {
    setContador(contador + 1);
  };

  const decrementarContador = (): void => {
    setContador(contador - 1);
  };

  const atualizarNome = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNome(e.target.value);
  };

  return (
    <>
      <Box>
        <p>Contador: {contador}</p>
        <Button onClick={incrementarContador} variant="contained">
          Incrementar
        </Button>
        <Button onClick={decrementarContador} variant="contained">
          Decrementar
        </Button>
      </Box>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "80ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled"
          variant="filled"
          value={nome}
          onChange={atualizarNome}
        />
        <p>Nome: {nome}</p>
      </Box>
    </>
  );
}
