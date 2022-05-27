
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Template from './components/Template';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route exact path='/'element={<Home/>}/>
      <Route path='/tempaltes' element={<Template/>}/>
      </Routes>
    </div>
  );
}

export default App;
