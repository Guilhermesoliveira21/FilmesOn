import { createContext, useContext, useState } from "react";

export const FavoritarContext = createContext();
FavoritarContext.displayName = "Favorito";

export default function FavoritarProvider({children}) {

    const [favorito, setFavorito] = useState([]);

    const valor = {
        favorito, 
        setFavorito
    }

    return (
        <FavoritarContext.Provider value={valor}>
            {children}
        </FavoritarContext.Provider>
    )
} 

export function useFavoritoContext() {
    const {favorito, setFavorito} = useContext(FavoritarContext)

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)
        
        let novaLista = [...favorito];

        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista)
        }
        
        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavorito(novaLista)

    }

    return {
        favorito,
        adicionarFavorito
    }
}