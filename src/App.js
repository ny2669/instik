
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
