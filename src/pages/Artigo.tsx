import StateApi from "../Components/Estados/StateApi";
import StateCounter from "../Components/Estados/StateCount";


export default function Artigo() {
    return(
        <>
        <h3>Página Artigo</h3>
        <h4>Contador</h4>
        <StateCounter/>
        <hr/>
        <StateApi/>        
        </>
    )
}