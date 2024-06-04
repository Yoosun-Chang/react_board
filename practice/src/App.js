import React from "react";
import './App.css'; 

const App = () => {
  
  const vegetables = ["감자", "고구마", "오이", "가지", "옥수수"];

  return (
    <div className="app-style">
      {vegetables.map((vegetableName) => {
        return (
          <div className="square-style" key={vegetableName}>
            {vegetableName}
          </div>
        );
      })}
    </div>
  );
};

export default App;