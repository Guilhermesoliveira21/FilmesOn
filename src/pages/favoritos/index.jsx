import Card from "../../components/Card";
import Texto from "../../components/Texto";
import { useFavoritoContext } from "../../context/Favoritar"
import style from "./fav.module.css";

const Favoritos = () => {

    const {favorito} = useFavoritoContext();

    return (
        <>
            <Texto cor="#ffffff">
                <h2>Meus favoritos</h2>
            </Texto>
            <br />
            <div className={style.container}>
                {favorito.length > 0 ? favorito.map((fav) => {
                    return <Card {...fav} key={fav.id}/>
                }): <div className="msg">
                    <Texto cor="#ffffff">
                    <h3>Não a favoritos</h3>
                    </Texto>
                    </div>
                    }
            </div>
        </>
    )
}

export default Favoritos