import {Routes, Route} from "react-router-dom"
import HOME from "./pages/HOME"
import PROFILE from './pages/PROFILE'
import REGISTER from "./pages/REGISTER"
import LOGIN from "./pages/LOGIN"


const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HOME />} />
            <Route path="/profile" element={<PROFILE />} />
          <Route path="/register" element={<REGISTER/>} />
          <Route path="/login" element={<LOGIN/>} />
        </Routes>
      </div>
    </>
  )
}

export default App