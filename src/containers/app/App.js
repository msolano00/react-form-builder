import './App.css';
import Form from '../../components/form';
import configuration from './configuration.json';

function App() {
  return (
    <div className="App">
      <Form configuration={configuration}/>
    </div>
  );
}

export default App;
