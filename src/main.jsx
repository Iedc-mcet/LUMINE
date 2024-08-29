import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import image from './Image.jsx'
import members from './Members.jsx'
import './index.css'
import './Apps.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Event from './Event.jsx'
import Execom from './Execom.jsx'
import Footer from './Footer.jsx'
import Eventgallery from './Eventgallery.jsx'
const options={loop:true}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home/>
    <About/>
    <Event/>
    <Eventgallery slides={image} options={options}/>
    <Execom/>
    <Footer/>
  </StrictMode>,
)
