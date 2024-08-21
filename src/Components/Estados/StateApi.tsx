import { useState, useEffect } from "react";
import { Box } from "@mui/material";

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function StateApi(): JSX.Element {
    const [posts, setPosts] = useState<Post[]>([]);

    //useEffect recebe 2 parâmetros
    //a função de callback
    //um array de dependência: qdo for declarado vazio,
    //significa que o efeito será executado somente 1x após o
    //componente ser renderizado
    //sem o array, pode entrar num loop infinito
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async (): Promise<void> => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);           
        } catch(error) {
            console.error(error);
        }
    };

    return(
        <>
            <h2>Posts do Blog</h2>
            <Box>
                {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
                ))}
      </Box>
        
        </>
    )
}