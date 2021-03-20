import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Textbox from '../textbox';
import Numeric from '../numeric';
import Infobox from '../infobox';
import Dropdown from '../dropdown';
import Button from '../button';

const Form = ({configuration}) => {
  
  const stateBuilder = configuration.form
  // .filter(element => element.type !== 'Infobox')
  .map(element => ({ id: element.configuration.id, value: '' }));

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

  const handleConditionals = (state, node) => {
    let flag = false;
    if(node.depends?.node !== undefined) {
      const dependecyNode = state.filter(element => element.id === node.depends.node)[0];
      
      switch(node.depends.condition) {
        case 'GREATER THAN':
          if(dependecyNode.value > node.depends.value) flag = true;
          break;
        case 'LESS THAN':
          if(dependecyNode.value < node.depends.value) flag = true;
          break;
        case 'EQUALS':
          if(dependecyNode.value === node.depends.value) flag = true;
          break;
        case 'INCLUDES':
          if(dependecyNode.value.includes(node.depends.value)) flag = true;
          break;
        case 'EXCLUDES':
          if(!dependecyNode.value.includes(node.depends.value)) flag = true;
          break;
        default:
          flag = false;
      }
    }
    return flag;
  }

  const builder = (form_configuration) => {
    return formData
    .filter(element => {
      const node = form_configuration.form.find(node => node.configuration.id === element.id);
      if(node.depends === undefined) return node;
      else if(handleConditionals(formData, node)) return node;
      return null
    }).map(element => {
      const node = form_configuration.form.find(node => node.configuration.id === element.id);
      switch(node.type) {
        case 'Infobox':
          return <Infobox {...node.configuration} key={element.id}/>
        case 'Textbox':
          return <Textbox 
            handleStateUpdate={handleStateUpdate}
            value={element.value}
            key={element.id} 
            {...node.configuration}/>
        case 'Numeric':
          return <Numeric 
            handleStateUpdate={handleStateUpdate}
            value={element.value}
            key={element.id}
            {...node.configuration}/>
        case 'Dropdown':
          return <Dropdown 
            handleStateUpdate={handleStateUpdate}
            value={element.value}
            key={element.id}
            {...node.configuration} />
        default:
          return null;
      }
    })
  };

  const form = builder(configuration);
  
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
