import AboutMe from './Components/AboutMe'
import HeroSection from './Components/HeroSection'
import './Components/HeroSection.css'


function App() {

  return (
    <div className='overflow-x-hidden h-screen lg:pt-12' style={{ backgroundColor: '#101920' }}>
      <HeroSection />
      <AboutMe />
    </div>
  )
}

export default App
