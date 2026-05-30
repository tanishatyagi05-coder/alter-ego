import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Questions from './pages/Questions'
import Results from './pages/Results'

import ChatRoom from './pages/ChatRoom'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/questions"
          element={<Questions />}
        />

        <Route
          path="/debate"
          element={<ChatRoom />}
        />

        <Route
          path="/results"
          element={<Results />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App