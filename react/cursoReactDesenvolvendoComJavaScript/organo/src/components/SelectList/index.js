import "./SelectList.css";

const SelectList = (props) => {
  return (
    <div className='select-list'>
      <label>{props.label}</label>
      <select 
      required = {props.required}
      value = {props.data}
      onChange = {event => props.valueInputChange(event.target.value)}
      >
        {props.itens.map(item => {
          return <option key={item} >{ item }</option>
        })}
      </select>
    </div>
  )
}

export default SelectList;