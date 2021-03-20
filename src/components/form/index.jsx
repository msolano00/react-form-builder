import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Textbox from '../textbox';
import Infobox from '../infobox';
import Dropdown from '../dropdown';
import Button from '../button';

const Form = ({configuration}) => {
  
  const stateBuilder = configuration.form
  .filter(element => element.type !== 'Infobox')
  .map(element => ({ id: element.configuration.id, value: null }));

  const [formData, setFormData] = useState(stateBuilder);

  const handleStateUpdate = (event) => {
    const updatedState = formData.map(element => {
      if(element.id === event.target.id) {
        return {
          id: event.target.id,
          value: event.target.value
        }
      }
      return element;
    });
    setFormData(updatedState);
  };

  const builder = (form_configuration) => {
    return form_configuration.form.map((element, index) => {
      if(element.type === 'Infobox') {
        return <Infobox {...element.configuration} key={index}/>
      }
      if(element.type === 'Textbox') {
        return <Textbox handleStateUpdate={handleStateUpdate}  {...element.configuration} key={index}/>
      }
      if(element.type === 'Dropdown') {
        return <Dropdown handleStateUpdate={handleStateUpdate} {...element.configuration} key={index}/>
      }

      return null;
    })
  };

  const form = builder(configuration)
  
  return (
    <div>
      <h1>{configuration.name}</h1>
      {form}
      <br/>
      <Button />
      <br/>
      <code>
        {JSON.stringify(formData)}
      </code>
    </div>
  )
};

Form.propTypes = {
  configuration: PropTypes.object
}

Form.defaultProps = {
  configuration: {
    name: 'Empty Form',
    form: []
  }
}

export default Form;
