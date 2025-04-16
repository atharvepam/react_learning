import withAuth from './components/withAuth'
import withLightMode from './components/withLightMode'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const Auth = withLightMode(withAuth(Dashboard))
  
  return (
    <>
      <Auth />
    </>
  )
}

export default App
