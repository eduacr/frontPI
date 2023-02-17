import './App.css'
import {routes} from './Routes';
import {Routes, Route} from 'react-router-dom';
import Home from './Routes/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NotFound from './Routes/NotFound';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/> 
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
