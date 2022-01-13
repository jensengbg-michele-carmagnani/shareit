import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import User from './user/screens/User';
import Places from './places/screens/Places';
import MainNavigation from './shared/Navigation/MainNavigation';
function App() {
  return (
    <>
    
    <MainNavigation/>
    <main>
    <Routes>
       
      {' '}
      <Route path="/user" element={<User />}>
        
      </Route>
      
      <Route path="/places" element={<Places />}></Route>
      <Route path="*" element={<Navigate to="/user" />}></Route>
      
    </Routes>
    </main>
    </>
  );
}

export default App;
