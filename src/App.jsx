import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Route,Routes,} from 'react-router'
import  { PureComponent } from 'react'
// import { useHistory } from 'react-router-dom'
import About from './Components/About'
// import MyTime from './Components/MyTime'
// Api key - 480e04df8f0646febad5d67789d6e8c0
export default class App extends PureComponent {
  render() {
    return (
      // <Navbar/>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/"  element = {<News  topic="business"/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path='/business' element = {<News  topic="business"/>} ></Route>
        <Route path='/sport' element = {<News  topic="sport"/>}></Route>
        <Route path='/science' element = {<News  topic="science"/>}></Route>
        <Route path='/entertainment' element = {<News  topic="entertainment"/>}></Route>
        <Route path='/politics' element = {<News topic="politics"/>}></Route>
        </Routes>       
      </BrowserRouter>     
      
    )
  }
}

