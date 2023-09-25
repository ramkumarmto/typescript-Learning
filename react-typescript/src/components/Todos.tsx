import React from "react";

//type defination what it does ?
// it indicates that it is a functional component
// generic type
const Todos: React.FC<{ items : string[]}> = (props) => {
  return <ul>
   {props.items.map((item)=> <li key={item}>{item}</li>)}
  </ul>;
};

export default Todos;
