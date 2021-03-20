import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Textbox from '../textbox';
import Numeric from '../numeric';
import Infobox from '../infobox';
import Dropdown from '../dropdown';
import Button from '../button';

const Form = ({configuration}) => {
  
  const stateBuilder = configuration.form
  .filter(element => element.type !== 'Infobox')
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
    console.log({formData})
   
    return form_configuration.form
    .filter(element => {
      if(element.depends === undefined) return element;
      // else if(handleConditionals(formData, element)) return element;
      return null
    })
    .map((element, index) => {
      switch(element.type) {
        case 'Infobox':
          return <Infobox {...element.configuration} key={index}/>
        case 'Textbox':
          return <Textbox handleStateUpdate={handleStateUpdate}  {...element.configuration} key={index}/>
        case 'Numeric':
          return <Numeric handleStateUpdate={handleStateUpdate}  {...element.configuration} key={index}/>
        case 'Dropdown':
          return <Dropdown handleStateUpdate={handleStateUpdate} {...element.configuration} key={index}/>
        default:
          return null;
      }
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
