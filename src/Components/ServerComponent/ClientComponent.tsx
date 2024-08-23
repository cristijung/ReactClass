//diretiva para definir que este componente é um Client
'use client';

import { useState } from "react";

const ClientComponent: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return(
        <>
        <h3>Este é um Client Component</h3>
        <p>Contador: {count}</p>
        <button onClick={handleClick}>Incrementar</button>
        </>
    )

}

export default ClientComponent;