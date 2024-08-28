import { Link } from "react-router-dom";
import style from "./link.module.css";

const LinkNavegacao = ({children, caminho, cor, background}) => {
    return(
        <Link to={caminho} 
        className={style.link}
        style={{
            color: cor || "#000",
            backgroundColor: background || "transparent"
        }}
        
        >{children}</Link>
    )
}

export default LinkNavegacao;