import React from 'react';
import UserItem from './UserItem';
import "./UserList.css"
import Card from '../../shared/components/UI/Card/Card';

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card >
        <h2 className="center">No user found</h2>
      </Card>
    );
  }
  
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
      
    </ul>
  );
};

export default UserList;
