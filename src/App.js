import Box from '@mui/material/Box';
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from './views/dashboard';
import Home from './views/home';
import Signin from './views/signin';
import Signup from './views/signup';
function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/dashboard' element={<Dashboard /> } />
          <Route path='/signin' element={<Signin /> } />
          <Route path='/signup' element={<Signup /> } />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
