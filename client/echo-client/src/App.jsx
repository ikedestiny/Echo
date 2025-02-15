import { Routes, Route } from 'react-router-dom'
import Navbar from './componets/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Connect from './pages/Connect'
import Chat from './componets/chat/Chat'
import ProfileDetail from './pages/ProfileDetail'

function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/profileDetail' element={<ProfileDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
