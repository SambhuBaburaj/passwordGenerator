
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import LoggedInUser from './ProtectedRoutes/LoggedInUser';
import LoggedOutUser from './ProtectedRoutes/LoggedOutUser';

import Register from './Pages/Register';
import Home from './Pages/Home';

function App() {
  return (
<Routes>
<Route element={<LoggedInUser/>}>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Route>
      <Route element={<LoggedOutUser/>}>
      <Route element={<Home />} path="/" />

      </Route>

</Routes>
  );
}

export default App;
