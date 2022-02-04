import React, { useState, useCallback, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import User from './user/screens/User';
import UserPlaces from './places/screens/UserPlaces';
import MainNavigation from './shared/Navigation/MainNavigation';
import NewPlace from './places/screens/NewPlace';
import UpdatePlace from './places/screens/UpdatePlace';
import Auth from '../src/user/screens/Auth';
import { AuthContext } from './shared/contex/auth-context';

function App() {
  const auth = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <MainNavigation />
        <main>
          {isLoggedIn ? (
            <Routes>
              <Route path="/user" element={<User />}/>
              <Route path="/:id/places" element={<UserPlaces />} />
              <Route path="/places/:id" element={<UpdatePlace />} />
              <Route path="/places/new" element={<NewPlace />} />
              <Route path="*" element={<Navigate  to="/user" />}/>
            </Routes>
          ) : (
            <Routes>
              <Route path="/user" element={<User />}></Route>
              <Route path="/:id/places" element={<UserPlaces />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<Navigate  to="/user" />}/>
            </Routes>
          )}
        </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
