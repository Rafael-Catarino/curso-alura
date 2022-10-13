import "./InputText.css";

const InputText = (props) => {

  const placeholderModificado = `${props.placeholder}...`;

  //let valor = 'Rafael';

  //todo vez que tiver um use no react esse use é um huck
  //const [valor,  setValor] = useState('Rafael');

  const inputChange = (event) => {
    props.valueInputChange(event.target.value);
  }

  return (
    <div className="InputText">
      <label>
        {props.label}
      </label>
      
      <input
        placeholder={placeholderModificado}
        required={props.required}
        onChange={inputChange}
        value={props.valor}
      />
    </div>
  )
}

export default InputText;