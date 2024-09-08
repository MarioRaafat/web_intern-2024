import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { Navbar, About, Contact, Experience, Intro, Tech,
  Works, Projects, Footer} from './components'

function App() {

  return (
    <>
        <BrowserRouter>
            <div className="flex-1 overflow-hidden">
                <Navbar />
                <Intro />
                <About />
                <Experience />
                <Projects />
                <Tech />
                <Contact />
                <Footer />
            </div>
        </BrowserRouter>
    </>
  )
}

export default App
