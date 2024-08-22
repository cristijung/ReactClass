//exemplo de ciclo de vida usando useEffect
//funções assíncronas
//array de dependência vazio para garantir q ele execute somente 1x e não re-renderize

import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';   
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';   


interface Gato {
    id: string;
    url: string;
}

export default function StateExe() {
    const [gatos, setGatos] = useState<Gato[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    //aqui usamos o array de dependência do useEffect para executar somente uma vez a requisição
    useEffect(() => {
        const buscarGatos = async () => {
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
                if (!response.ok) {
                    throw new Error('Erro ao buscar a imagem de gatos!');
                }
                const dados = await response.json();
                setGatos(dados);
            } catch (error) {
                setErro("Ocorreu um erro ao buscar os gatos. Tente novamente mais tarde!");
                console.error(error);
            } finally {
                setCarregando(false);
            }
        };

        buscarGatos()
    }, []);

    return (
        <>
        <h2>Gatitos</h2>
        {carregando && <p>Carregando ...</p>}
        {erro && <p>{erro}</p>}
        {!carregando && !erro && (
          <Container maxWidth="md"> 
            <Grid container spacing={2}> 
              {gatos.map((gato) => (
                <Grid item xs={12} sm={6} md={4} key={gato.id}> 
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Gato"
                      height="140"
                      image={gato.url}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Gatinho fofo
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </>
    )
   

}