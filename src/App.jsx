import { useState } from 'react'
import Add from './Component/Add'
import List from './Component/List'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [success, setSuccess]=useState(" ")

  return (
    <>
      <nav className='navbar navbar-expand navbar-light bg-info'>
        <a href="" className='navbar-brand'>
          {" "}
          
          <i className="me-2 fa-solid fa-video"></i>{' '}
          <b>Cinema_Hub</b>
        </a>
      </nav>
      <div className='container-fluid' style={{ minHeight: '100vh', backgroundColor: 'black' }}>
        <Add val={setSuccess}/>
        <List success={success}/>
      </div>
    </>
  )
}

export default App
