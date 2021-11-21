import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import Routes from './Routes'
import Header from '../src/components/Header'
import { StoreProvider } from './globalState/Store'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div data-testid='app-component' className='App'>
      <StoreProvider>
        <Router>
          <Header showModal={showModal} setShowModal={setShowModal} />
          {Routes}
        </Router>
      </StoreProvider>
    </div>
  )
}

export default App
