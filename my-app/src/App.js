import {Link,BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './HttpEx/components/Home'
import About from './HttpEx/components/About'
import Services from './HttpEx/components/Services'
import Contact from './HttpEx/components/Contact'
import Users from "./HttpEx/User"
import Emp from "./HttpEx/Emp"

function App(){
  return <div>
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="#" className="navbar-brand">Logo</Link>
        <div  className="ml-auto">
            <ul className="navbar-nav">
               <li><Link to ="/employee" className="nav-link">Emp</Link></li>
                <li> <Link to="/users" className="nav-link">Users</Link></li>
                <li> <Link to="/index" className="nav-link">Home</Link></li>
                <li> <Link to="/about" className="nav-link">About</Link></li>
                <li> <Link to="/services" className="nav-link">Service</Link></li>
                <li> <Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
        </div>
      </nav>
      <Routes>
      <Route path="/index"  element={<Home/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/services"  element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/employee" element={<Emp/>}/>

      </Routes>
    </BrowserRouter>
  </div>
}

export default App