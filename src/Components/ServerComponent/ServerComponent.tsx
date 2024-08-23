//Este será um componente server que recebe um client component

import { Suspense } from "react";
import ClientComponent from "./ClientComponent";

const ServerComponent: React.FC = () => {
    const messageForServer = "Esta mensagem é para ser renderizada no Servidor."

    return(
        <>
        <h1>Este é um server component</h1>
        <h3>{messageForServer}</h3>

        <Suspense fallback={<p>Carregando o Client component ...</p>}>
            <ClientComponent/>        
        </Suspense>
        </>
    )
}

export default ServerComponent;