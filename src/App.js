import Home from './Components/Home/Home';
import {Route, Routes} from 'react-router-dom'
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header name={'Shawn'}/> 
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
