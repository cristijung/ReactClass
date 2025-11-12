
import { useToggle } from '../Hooks/useToggle'; // importando o Hook personalizado


export default function ToggleButton() {
  // o componente usa o Hook como se fosse um nativo, obtendo o estado e a função
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <p>O estado atual é: **{isOn ? 'LIGADO' : 'DESLIGADO'}**</p>
      <button onClick={toggle}>
        Alternar
      </button>
    </div>
  );
};



