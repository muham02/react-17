
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './components/products/Products'
import Single from './components/single/Single'

function App() {

  return (
 <>
<Routes>
<Route path="/" element={<Products/>}/>
  <Route path="/single" element={<Single/>}/>
</Routes>
 
 </>
  )
}

export default App
