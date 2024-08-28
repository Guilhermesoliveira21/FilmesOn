import style from "./texto.module.css";

const Texto = ({children, cor}) => {
    return (
        <div 
        style={{color: cor }}
        className={style.texto}>
            {children}
        </div>
    )
}

export default Texto;