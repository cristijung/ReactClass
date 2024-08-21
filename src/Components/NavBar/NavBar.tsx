import LinkMenu from './LinkMenu';
import Styles from './NavBar.module.scss';


export default function NavBar() {
    return (
      <>
        <nav className={Styles.navbar}> 
          <div className={Styles.navbar__logo}>React</div> 
          <ul className={Styles.navbar__links}> 
            <li><LinkMenu to='/'>Home</LinkMenu></li>
            <li><LinkMenu to='/galeria'>Galeria</LinkMenu></li>
            <li><LinkMenu to='/artigo'>Artigo</LinkMenu></li>
            <li><LinkMenu to='contato'>Contato</LinkMenu></li>
          </ul>
          <div className={Styles.navbar__toggle}> 
            <div className={Styles.bar}></div>
            <div className={Styles.bar}></div>
            <div className={Styles.bar}></div>
          </div>
        </nav>
      </>
    );
  }