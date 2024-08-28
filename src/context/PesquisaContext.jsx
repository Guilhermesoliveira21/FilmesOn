import { createContext, useState } from "react";

export const PesquisaContext = createContext();
PesquisaContext.displayName = "Pesquisa"

export default function PesquisaProvider({children}) {

    const [pesquisa, setPesquisa] = useState("");


    const value = {
        pesquisa, setPesquisa,
    }

    return(
        <PesquisaContext.Provider value={value}>
            {children}
        </PesquisaContext.Provider>
    )
}
