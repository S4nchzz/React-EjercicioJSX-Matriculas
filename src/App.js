import './App.css';
import Saludo from "./Saludo"
import Despedida from "./Despedida"
import Matriculas from './Matriculas';

function App() {
  const value = false

  return (
    <div className='App'>
      <header className='App-header'>
        {value ? (
          <Saludo />
        ) : (
          <Despedida />
        )}

        <Matriculas/>
      
      </header>
    </div>

  );
}

export default App;
