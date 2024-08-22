import { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

//hook personalizado useFetchData
//o 'T" neste é um generic type --> permitir criar componentes
//q serão reutilizadas de forma segura e tipada
function useFetchdata<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
    //aqui é o controle dos estados do hook personalizado
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responser = await fetch(url);
        if (!responser.ok) {
          throw new Error("Erro ao buscar dados");
        }
        const jsonData = await responser.json();
        setData(jsonData);
      } catch (err) {
        setError("Ocorreu um erro ao buscar os dados");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}
//até aqui é o hook personalizado


interface Gato {
  id: string;
  url: string;
}

export default function GaleriaDeGatos() {
  const {
    data: gatos, //renomeia a propriedade data para gatos
    loading,
    error
  } = useFetchdata<Gato[]>(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  useEffect(() => {
    if (gatos) {
      console.log("Fotos dos gatos carregadas", gatos);
    }
  }, [gatos]);

  return (
    <>
      <div>
        Oi
        {loading && <p>Carregando ....</p>}
        {error && <p>{error}</p>}
        <Grid container spacing={2}>
          {gatos &&
            gatos.map((gato) => (
              <Grid item xs={12} sm={6} md={4} key={gato.id}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="Gato"
                    height="250"
                    image={gato.url}
                  />
                  <CardContent>
                    <Typography variant='h5' component='div' gutterBottom>
                        Gatinhos maravilhosos
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
}
