import React from 'react';
import UserList from '../components/UserList';

const User = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Michele',
      image:
        'https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png',
      placeCount: 3,
    },
  ];
  return (
   
      <UserList items={USERS} />
    
  );
};

export default User;
