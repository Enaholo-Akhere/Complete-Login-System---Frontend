import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './views/dashboard';
import Home from './views/home';
import Signin from './views/signin';
import Signup from './views/signup';
import ForgotPassword from './views/forgotpassword';
import ProtectedRouted from './component/ProtectedRoutes';
import RedirectTo from './component/RedirectTo';
import ResetPassword from './views/resetPassword';
const App = () => {
  return (
    
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home />} />

          <Route element={<ProtectedRouted />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<RedirectTo />}>
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route
              path='/resetpassword/:userId/:resetString'
              element={<ResetPassword />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
};

export default App;
