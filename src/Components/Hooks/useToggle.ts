'use client';
import { useState } from 'react';

// o Hook retorna o valor atual (boolean) e a função para alterná-lo
export function useToggle(initialValue: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  // função para alternar o valor
  const toggle = () => {
    setValue(currentValue => !currentValue);
  };

  // retorna o estado e a função de controle
  return [value, toggle];
}


