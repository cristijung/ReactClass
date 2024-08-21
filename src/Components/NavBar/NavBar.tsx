import LinkMenu from './LinkMenu';
import Styles from './NavBar.module.scss';


export default function NavBar() {
    return(
        <>
        <nav className={Styles.top}>
            <LinkMenu to='/'>Home</LinkMenu>
            <LinkMenu to='/galeria'>Galeria</LinkMenu>
            <LinkMenu to='/artigo'>Artigo</LinkMenu>
            <LinkMenu to='contato'>Contato</LinkMenu>                       
        </nav>
        
        </>
    );
}