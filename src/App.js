import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';

function App() {
  return (
    <div className='home'>

      <Routes>
        <Route path = "/" element = { <Home/> }/>
      </Routes>

    </div>
  );
}

export default App;
