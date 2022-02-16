
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Login from './pages/Login/Login';
import Header from './pages/Header/Header';
import Orders from './pages/Orders/Orders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/product'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
