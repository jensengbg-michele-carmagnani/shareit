import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import User from './user/screens/User';
import Places from './places/screens/Places';
import MainNavigation from './shared/Navigation/MainNavigation';
import AddPlace from './places/screens/AddPlace';
function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          {' '}
          <Route path="/user" element={<User />}></Route>
          <Route path="/u1/places" element={<Places />}></Route>
          <Route path="/places/new" element={<AddPlace />} />
          <Route path="*" element={<Navigate to="/user" />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
