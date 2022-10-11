import "./InputText.css";

const InputText = (props) => {

  const placeholderModificado = `${props.placeholder}...`;

  return (
    <div className="InputText">
      <label>
        {props.label}
      </label>
      
      <input
        value={props.valor}
        placeholder={placeholderModificado}
      />
    </div>
  )
}

export default InputText;