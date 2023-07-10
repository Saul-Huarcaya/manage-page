import './App.css';
import Nav from './componentes/Nav';
import Footer from './page/Footer/Footer';
import SectionAbout from './page/SectionAbout/SectionAbout';
import SectionHome from './page/SectionHome/SectionHome';
import SectionSimply from './page/SectionSimply/SectionSimply';
import SectionTestimonials from './page/SectionTestimonials/SectionTestimonials';

function App() {

  return (
    <>
      <Nav/>
      <SectionHome/>
      <SectionAbout/>
      <SectionTestimonials/>
      <SectionSimply/>
      <Footer/>
    </>
  )
}

export default App
