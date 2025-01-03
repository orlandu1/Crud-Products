import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import AppRoutes from './routes/routes';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
