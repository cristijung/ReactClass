import React, { useState } from 'react';
import { Button } from '@mui/material';

interface MensagemProps {
    mensagemInicial: string;
}

export default function Review({ mensagemInicial }: MensagemProps) {
    const [mensagem, setMensagem ] = useState(mensagemInicial);
    const [editMode, setEditMode] = useState(false);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMensagem(e.target.value);
    };

    const toogleEditMode = () => {
        setEditMode(!editMode);
    };


    return(
        <>
        <div>
            {editMode ? (
                <input type='text' value={mensagem} onChange={inputChange} />
            ): (
                <p>{mensagem}</p>
            )}
            <Button variant="contained" color="secondary" onClick={toogleEditMode}>
                {editMode ? 'Salvar' : 'Editar'}
            </Button>
        </div>      
        
        </>
    );
}