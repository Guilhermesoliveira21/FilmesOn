import style from "./botao.module.css";

const Botao = ({children, type}) => {
    return (
        <button
        className={style.botao}
        type={type}>
            {children}
        </button>
    )
}

export default Botao;
