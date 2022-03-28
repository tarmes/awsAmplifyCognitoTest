import './App.css';
import Shown from './Components/Shown'
import Hidden from './Components/Hidden'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Shown /> } />
      </Routes>
    </div>
  );
}

export default App;
