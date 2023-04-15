import './App.css'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Value from './components/Our Value/Value'
import Residencies from './components/Residencies/Residencies'
import Sponsers from './components/Sponsers/Sponsers'
import Bannar from './components/Bannar/Bannar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
        <div className="circle"/>
        <Navbar/>
        <Hero/>
        <Sponsers/>
        <Residencies/>
        <Value/>
        <Contact/>
        <Bannar/>
        <Footer/>
    </div>
  )
}

export default App
