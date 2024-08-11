import { useState } from "react";
import Footer from "./Footer";
import TodoList from "./TodoList";
import Form from "./Form";

export default function Todo() {
  //as todos is necessary in both the child components
  // so we will take the tods component to the parent componenet
  //and send it to both componenets as props
  const [todos, setTodos] = useState([]); //as we will store the todo work in array

  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
