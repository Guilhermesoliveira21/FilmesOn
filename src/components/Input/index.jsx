import style from "./input.module.css";

const Input = ({placeholder, label, value, onChange, type}) => {
    return (
        <div className={style.container}>
            <label
            className={style.label}
            >{label}</label>
            <input 
            className={style.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}

export default Input;