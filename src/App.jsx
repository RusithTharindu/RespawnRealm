import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      {/* <Navbar /> */}
      <Hero />
      <About/>
      <Footer/>
    </main>
  )
}

export default App;