import { useParams } from "react-router-dom";
import filmes from "../../db/filmes.json";
import { useEffect, useState } from "react";
import Texto from "../../components/Texto";
import { AiOutlineHeart } from "react-icons/ai";
import { useFavoritoContext } from "../../context/Favoritar";

const Filme = () => {

    const [filmee, setFilmee] = useState([])

    const {id} = useParams()

    const findd = filmes.find((filme) => {
        return filme.id === Number(id)
    })

    const {favorito, adicionarFavorito} = useFavoritoContext();

    return (
        <div>
            <Texto cor="#ffffff">
                <h2>Filme: {findd.titulo}</h2>
            </Texto><br />

                <iframe
                className="iframe"
                src={findd.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default Filme;