import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Todo.css";

const Todo = () => {
  const param = Number(useParams().id);
  const globalTodo = useSelector((state) => state.todos);
  const navigate = useNavigate();

  // console.log(typeof globalTodo[0].id);
  // console.log(globalTodo);
  const todo = globalTodo.filter((todo) => {
    return todo.id === param;
  });
  console.log(todo);

  //console.log(one);
  return (
    <div className="body">
      <div className="detailTodo">
        <div className="detailTodoTop">
          <span>id : {param}</span>
          <span className="detailTodoButton">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </button>
          </span>
        </div>

        <h1>{todo[0].title}</h1>
        <hr></hr>
        <h3>{todo[0].content}</h3>
      </div>
    </div>
  );
};

export default Todo;
