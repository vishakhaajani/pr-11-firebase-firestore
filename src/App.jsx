import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import View from './Pages/View'
import Edit from './Pages/Edit'
import Login from './Pages/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/view' element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
