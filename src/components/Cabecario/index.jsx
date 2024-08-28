import { useContext, useState } from "react";
import Input from "../Input";
import LinkNavegacao from "../Link";
import style from "./cabecario.module.css";
import { PesquisaContext } from "../../context/PesquisaContext";

const Cabecario = () => {

    const {pesquisa, setPesquisa} = useContext(PesquisaContext)

    return (
        <header className={style.container}>
            <div className={style.logo}>
                <LinkNavegacao caminho="/" cor="#ffffff">Filmes <span className={style.on}>Online</span></LinkNavegacao>
            </div>
            <div className={style.input}>
                <Input 
                placeholder="Pesquisar filme..."
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                />
            </div>
            <nav className={style.links}>   
                
                <LinkNavegacao caminho="/favoritos" cor="#ffffff">Favoritos</LinkNavegacao>
            </nav>
        </header>
    )
}

export default Cabecario;