import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './Layout'
import { Home, Resume, Projects, Contact } from "./pages";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
