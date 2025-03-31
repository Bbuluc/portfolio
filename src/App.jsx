import Aboutme from './components/Aboutme'
import ContactForm from "./components/contactForm"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Header/>
      <Home />
      <Aboutme/>
      <Projects/>
      <ContactForm/>
    </>
  )
}

export default App
