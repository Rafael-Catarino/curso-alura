import Form from './components/Form';
import Banner from './components/Banner';
import { useState } from 'react';

function App() {

  const [arrObject, setArrObject] = useState([]);

  const createArrObjectPerson = (object) => {
    console.log(object);
    setArrObject([...arrObject, object])
    console.log(arrObject)
  }

  return (
    <div>
      <Banner />
      <Form getObjectPerson = {object => createArrObjectPerson(object)}/>
    </div>
  );
}

export default App;
