import logo from './logo.svg';
import './App.css';
import LearnReducer from './Components/LearnReducer/LearnReducer';
import Patient from './Components/Patient/Patient';

function App() {

  return (
    <div className="App">
      <LearnReducer></LearnReducer>
      <Patient></Patient>
    </div>
  );
}

export default App;
