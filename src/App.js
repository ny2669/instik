
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart'
import {ContextProvider} from './components/Content'
function App() {
  return (
    <div>

      <ContextProvider>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
      </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
