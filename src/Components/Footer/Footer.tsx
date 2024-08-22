import Styles from './Footer.module.scss';


export default function Footer() {
    return(
        <>
        <footer className={Styles.footer}>
      <div className={Styles.container}>   

        <div className={Styles.logo}>   

          <img src="/logo.png" alt="Logo da empresa" />
        </div>

        <div className={Styles.links}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/estados">Estados</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        <div className={Styles.copyright}>
          &copy; {new Date().getFullYear()} Nome da Empresa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
        
        </>
    );
}