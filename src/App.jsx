import { Routes, Route } from 'react-router-dom'

import StartPage from './Pages/StartPage.jsx'
import NavBar from './Pages/NavBar.jsx'
import About from './Pages/About.jsx'
import Footer from './Pages/Footer.jsx'
import Catalog from './Pages/Catalog.jsx'
import Cotd from './Pages/CatOfTheDay.jsx'

function App() {

  return (
    <>
    <NavBar/>

    <Routes>
      <Route path="/"   element={<StartPage/>} />
      <Route path="/about"    element={<About/>} />
      <Route path="catalog"   element={<Catalog/>} />
      <Route path="catoftheday"   element={<Cotd/>} />
    </Routes>

    <Footer/>
    </>
  );
}

export default App