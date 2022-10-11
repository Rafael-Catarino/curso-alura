import "./SelectList.css";

const SelectList = (props) => {
  return (
    <div className='select-list'>
      <label>{props.label}</label>
      <select>
        {props.itens.map(item => {
          return <option key={item} >{ item }</option>
        })}
      </select>
    </div>
  )
}

export default SelectList;