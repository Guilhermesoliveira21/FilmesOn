import { useContext } from "react";
import Card from "../../components/Card";
import filmes from "../../db/filmes.json";
import { PesquisaContext } from "../../context/PesquisaContext";
import Texto from "../../components/Texto";

const Home = () => {
   
    const {pesquisa} = useContext(PesquisaContext)

    const pesquisar = pesquisa.toLowerCase()

    const filmesFiltrados = filmes.filter((busca) => busca.
    titulo.toLowerCase().includes(pesquisar))
 
    return(
    <>
        <Texto cor="#ffffff"><h2>Filmes</h2></Texto>
       
        <div className="containerHome">

        
        {filmesFiltrados.map((filme) => {
            return <Card {...filme} key={filme.id}/>
        })}

        </div>

    </>
        
    )
}

export default Home;