import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Main } from './components/Main';
import { RandomJoke } from './pages/RandomJoke';
import { MyJokes } from './pages/MyJokes';
import { AddJoke } from './pages/AddJoke';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/login' replace />} />
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
          <Route
            path='/my-jokes'
            element={
              <Main>
                <MyJokes />
              </Main>
            }
          />
          <Route
            path='/add-joke'
            element={
              <Main>
                <AddJoke />
              </Main>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
