import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Main } from './components/Main'
import { RandomJoke } from './pages/RandomJoke'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/random-joke'
            element={
              <Main>
                <RandomJoke />
              </Main>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
