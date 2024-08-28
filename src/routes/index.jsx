import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Favoritos from "../pages/favoritos"
import Cabecario from "../components/Cabecario"
import PesquisaProvider from "../context/PesquisaContext"
import Filme from "../pages/filme"
import FavoritarProvider from "../context/Favoritar"
import Footer from "../components/Footer"

const Routeador = () => {
    return (
        <BrowserRouter>
            <PesquisaProvider>
            <Cabecario/>
            <div className="container">
                <FavoritarProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                        <Route path="/filme/:id" element={<Filme />} />
                    </Routes>
                </FavoritarProvider>
            </div>
           </PesquisaProvider>
           <Footer />
        </BrowserRouter>
    )
}

export default Routeador;