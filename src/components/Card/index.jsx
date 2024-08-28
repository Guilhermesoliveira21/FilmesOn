import { Link } from "react-router-dom";
import Texto from "../Texto";
import style from "./card.module.css";
import { useFavoritoContext } from "../../context/Favoritar";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const Card = ({imagem, id, titulo}) => {

    const {favorito, adicionarFavorito} = useFavoritoContext();

    const ehFavorito = favorito.some(fav => fav.id === id);
    const texto = ehFavorito ? <AiFillHeart  size={28}/>: <AiOutlineHeart size={28}/> 

    return (
        <div className={style.container}>
            <div className="filmes">
            <Link to={`/filme/${id}`}>
                <div
                style={{backgroundImage: `url(${imagem})`}}
                className={style.card}
                >
                    <div className={style.cardT}>
                        <Texto cor="#fff"><p>{titulo}</p></Texto>
                    </div>
                </div>
            </Link>
            
                    <p onClick={() => {
                    adicionarFavorito({imagem, id, titulo})
                }} className={style.fav}>{texto}</p>
                    
        
            </div>
            
        </div>
    )
}

export default Card;