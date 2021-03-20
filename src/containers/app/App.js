import React, { useState } from 'react';
import Form from '../../components/form';
import configuration from './configuration.json';
import './App.css';

const App = () => {

  const stateBuilder = configuration.form.map(element => ({ id: element.configuration.id, value: '' }));
  const [formData, setFormData] = useState(stateBuilder);

  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <Form 
            configuration={configuration} 
            formState={formData}
            handleFormChange={setFormData}
          />
          <div className="output">
            <pre>
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        </div>
        <div className="column configuration">
          <pre>
            {JSON.stringify(configuration, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
