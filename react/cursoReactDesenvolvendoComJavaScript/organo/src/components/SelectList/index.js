import "./SelectList.css";

const SelectList = (props) => {

  const selectInputChange = (event) => {
    props.valueInputChange(event.target.value)
  }

  return (
    <div className='select-list'>
      <label>{props.label}</label>
      <select 
      required = {props.required}
      value = {props.data}
      onChange = {selectInputChange}
      >
        <option value=""></option>
        {props.itens.map(item => {
          return <option key={item} >{ item }</option>
        })}
      </select>
    </div>
  )
}

export default SelectList;