import Form from './components/Form';
import Banner from './components/Banner';
import { useState } from 'react';
import Team from './components/Team';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '##f0f8e2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Desingn',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const createArrObjectPerson = (object) => {
    setColaboradores([...colaboradores, object]);
  }


  return (
    <div>
      <Banner />
      <Form 
        times={ times.map(time =>  time.nome) } 
        getObjectPerson = {object => createArrObjectPerson(object)}
      />
      
      {times.map(time => <Team 
        key = {time.nome} 
        nome = {time.nome}
        corPrimaria = {time.corPrimaria}
        corSecundaria = {time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
      />)}
    </div>
  );
}

export default App;
