//class component
//não é recomendado que se desenvolva desta forma

import { Component } from "react";

interface MeuComponenteProps {
  nome: string;
}

interface MeuComponenteState {
  contador: number;
}

class ClassComponent extends Component<MeuComponenteProps, MeuComponenteState> {
  intervalId: NodeJS.Timeout | null = null;

  //construtor
  constructor(props: MeuComponenteProps) {
    super(props);
    this.state = { contador: 0 };
  }

//a partir daqui, estamos usando métodos para determinar o ciclo de vida desta classe

  //componentDidMount
  //montagem do componente
  //que vai iniciar um intervalo incrementador para o contador a cada segundo
  componentDidMount() {
    console.log("Componente montado");
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ contador: prevState.contador + 1 }));
    }, 1000);
  }

  //shouldComponentUpdate
  //otimiza o desempenho permitindo atualização somente se:
  //o nome 'prop' mudar
  //o contador for par
  shouldComponentUpdate(
    nextProps: Readonly<MeuComponenteProps>,
    nextState: Readonly<MeuComponenteState>
  ): boolean {
    //atualiza só se o nome mudar ou o contador for par
    return nextProps.nome !== this.props.nome || nextState.contador % 2 === 0;
  }

  //componentDidUpdate
  //vai exibir a mensagem no console se o nome foi atualizado
  componentDidUpdate(
    prevProps: Readonly<MeuComponenteProps>,
    prevState: Readonly<MeuComponenteState>
  ) {
    if (prevProps.nome !== this.props.nome) {
      console.log("Nome atualizado");
    }
  }

  //componentWillUnmount
  //componente será desmontado
  componentWillUnmount() {
    console.log("Componente será desmontado");
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  //render - exibe um texto com o nome (prop) e o valor do contador
  //função responsável por renderizar o ClassComponent na tela
  render() {
    return (
      <>
        <h2>Olá ....., {this.props.nome}!</h2>
        <p>Contador: {this.state.contador} </p>
      </>
    );
  }
}
export default ClassComponent;
