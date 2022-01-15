import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import User from './user/screens/User';
import UserPlaces from './places/screens/UserPlaces';
import MainNavigation from './shared/Navigation/MainNavigation';
import NewPlace from './places/screens/NewPlace';
function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          {' '}
          <Route path="/user" element={<User />}></Route>
          <Route path="/:id/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<Navigate to="/user" />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
