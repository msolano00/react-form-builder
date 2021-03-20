import './App.css';
import Form from '../../components/form';

const infotext = 'Welcome to the first iteration of the form builder!';
const profession_opts = [
  { value: 0, label: 'None' },
  { value: 1, label: 'Architect' },
  { value: 2, label: 'Designer' },
  { value: 3, label: 'Economist' },
  { value: 4, label: 'Developer' }
];
const developer_opts = [
  { value: 0, label: 'None' },
  { value: 1, label: 'Data Scientist' },
  { value: 2, label: 'DevOps Engineer' },
  { value: 3, label: 'SecOps Engineer' },
  { value: 4, label: 'Software Engineer' }
];
const form_configuration = {
  name: 'Demo',
  form: [
    { 
      type: 'Infobox',
      configuration: {
        information: infotext
      }
    }, 
    { 
      type: 'Textbox',
      configuration: {
        id: 'username',
        label: 'First name'
      }
    },
    { 
      type: 'Textbox',
      configuration: {
        id: 'lastname',
        label: 'Last name'
      }
    },
    { 
      type: 'Dropdown',
      configuration: {
        id: 'profession',
        label: 'Profession',
        options: profession_opts
      }
    },
    { 
      type: 'Dropdown',
      configuration: {
        id: 'developer_type',
        label: 'Developer Type',
        options: developer_opts
      },
      depends: {
        node: 'profession',
        condition: 'EQUALS',
        value: 4
      }
    }
  ]
};

// Supported conditions ['GREATER THAN', 'LESS THAN', 'EQUALS', 'INCLUDES', 'EXCLUDES']


function App() {
  return (
    <div className="App">
      <Form configuration={form_configuration}/>
    </div>
  );
}

export default App;
