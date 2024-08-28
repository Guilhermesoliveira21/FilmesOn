import style from "./formulario.module.css"

const Formulario = ({children, onSubmit}) => {
    return(
        <div className={style.container}>
            <form className={style.form} onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    )
}

export default Formulario;