import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import View from './Pages/View'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/' element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
