import Button from "../Button";
import InputText from "../InputText";
import SelectList from "../SelectList";
import "./Form.css";

const Form = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Sicience',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  const clickSaved = (event) => {
    event.preventDefault();
    console.log('Form foi submetido');
  }

  return (
    <section className="form">
      <form onSubmit={clickSaved}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText
          label="Nome:"
          placeholder="Digite seu nome"
          required={true}
        />

        <InputText 
          label="Cargo:"
          placeholder="Digite seu cargo"
          required={true}
          />

        <InputText 
          label="Imagem:" 
          placeholder="Digite o endereço da imagem"
          required={true}
        />

        <SelectList 
        label='Times: '
        itens={times}
        required={true}
        />

        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}

export default Form;