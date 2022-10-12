import { useState } from "react";
import Button from "../Button";
import InputText from "../InputText";
import SelectList from "../SelectList";
import "./Form.css";

const Form = (props) => {

  const times = [
    '',
    'Programação',
    'Front-End',
    'Data Sicience',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const clickSaved = (event) => {
    event.preventDefault();
    props.getObjectPerson({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <section className="form">
      <form onSubmit={clickSaved}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText
          label="Nome:"
          placeholder="Digite seu nome"
          required={true}
          valor={nome}
          valueInputChange = {valor => setNome(valor)}
        />

        <InputText 
          label="Cargo:"
          placeholder="Digite seu cargo"
          required={true}
          valor={cargo}
          valueInputChange ={valor => setCargo(valor)}
          />

        <InputText 
          label="Imagem:" 
          placeholder="Digite o endereço da imagem"
          required={true}
          valor = {imagem}
          valueInputChange={valor => setImagem(valor)}
        />

        <SelectList 
        label='Times: '
        itens={times}
        required={true}
        valor = {time}
        valueInputChange = {valor => setTime(valor)}
        />

        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}

export default Form;