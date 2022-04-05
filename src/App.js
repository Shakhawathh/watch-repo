import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Notfound from './components/notfound/Notfound';
import Rechart from './components/rechart/Rechart';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Rechart></Rechart>}></Route>
        <Route path='/' element={<Notfound></Notfound>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
