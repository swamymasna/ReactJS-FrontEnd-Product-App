import logo from './logo.svg';
import './App.css';
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ViewProductComponent from './components/ViewProductComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <Router>
          <Routes>
            <Route path='/' element={<ListProductComponent />}></Route>
            <Route path='/products' element={<ListProductComponent />}></Route>
            <Route path='/create' element={<CreateProductComponent />}></Route>
            <Route path='/update' element={<UpdateProductComponent />}></Route>
            <Route path='/view' element={<ViewProductComponent />}></Route>
          </Routes>
        </Router>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
