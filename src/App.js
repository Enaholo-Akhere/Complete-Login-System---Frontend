import Box from '@mui/material/Box';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './views/dashboard';
import Home from './views/home';
import Signin from './views/signin';
import Signup from './views/signup';
import ProtectedRouted from './component/ProtectedRoutes';
import RedirectTo from './component/RedirectTo';
const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          
          <Route element={<ProtectedRouted />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<RedirectTo />}>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
