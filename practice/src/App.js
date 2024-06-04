import React,{useState} from 'react';
import './App.css'; 

function CustomButton(props) {
  const {color, onClick, children} = props
  
    if (color)
      return (
        <button
          style={{ background: color, color: "white" }}
          onClick={onClick}
        >
          {children}
        </button>
      );
  
    return <button onClick={onClick}>{props.children}</button>;
  }


function User(props) {
  return (
    <div className="square-style">
      <div>{props.user.age}살 - </div>
      <div>{props.user.name}</div>
      <CustomButton color="red" onClick={() => props.handleDelete(props.user.id)}>
        삭제하기
      </CustomButton>
    </div>
  );
}

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: '송중기' },
    { id: 2, age: 24, name: '송강' },
    { id: 3, age: 21, name: '김유정' },
    { id: 4, age: 29, name: '구교환' },
  ]);
  const [name, setName] = useState('');
  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: 30,
      name: name,
    };

    setUsers([...users, newUser]);
  };
	const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  return (
    <div className="app-container">
      <input
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      {users.map((user) => {
        return <User user={user} key={user.id} handleDelete={deleteUserHandler}/>;
      })}
      <CustomButton color="green" onClick={addUserHandler}>추가하기</CustomButton>
    </div>
  );
};

export default App;