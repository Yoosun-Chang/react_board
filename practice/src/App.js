import React from 'react';
import './App.css';

function User(props) {
  return (
    <div className="square-style">  {/* Apply square-style class here */}
      {props.user.age}살 - {props.user.name}
    </div>
  );
}

const App = () => {
  const users = [
    { id: 1, age: 30, name: '송중기' },
    { id: 2, age: 24, name: '송강' },
    { id: 3, age: 21, name: '김유정' },
    { id: 4, age: 29, name: '구교환' },
  ];
  return (
    <div className="app-container">
      {users.map((user) => {
        return <User className="square-style" user={user} key={user.id} />; 
      })}
    </div>
  );
};

export default App;
