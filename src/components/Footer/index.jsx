import Texto from "../Texto";
import style from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={style.container}>
            <Texto cor="#ffffff"><h4>Tecnologias utilizadas</h4></Texto>
            <Texto cor="#ffffff"><p className={style.techs}>React.js, css module e useContext</p></Texto>
        </footer>
    )
}

export default Footer;