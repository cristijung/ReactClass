import ClassComponent from "../Components/CicloVida/ClassComponent";
import StateExe from "../Components/CicloVida/FunctionComponent";
import Review from "../Components/Estados/Review";
import ServerComponent from "../Components/ServerComponent/ServerComponent";

export default function Home() {
    return(
        <>
        Esta é a home
        <hr/>
        <Review mensagemInicial="Olá visitante..."/>
        <hr/>

        <ClassComponent nome="Nome do Usuário" />
        <hr/>
        <StateExe/>
        <hr/>
        <ServerComponent/>
        
        </>
    )
}