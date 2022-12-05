import "./Home.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, changeTodo } from "../redux/modules/todos";
import { Link, useParams, useNavigate } from "react-router-dom";
import Form from "../components/form/Form";
import Main from "../components/Main";
import styled from "styled-components";

const Home = () => {
  const [tempTodo, setTempTodo] = useState([]);
  const globalTodo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickAddTodoHandler = () => {
    if ((tempTodo[0].length === 0) | (tempTodo[1].length === 0)) {
      alert("값을 입력하세요~");
    } else {
      dispatch(addTodo(tempTodo));
      setTempTodo(["", ""]);
      console.log(globalTodo);
    }
  };

  const onClickDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  const onClickChangeHandler = (id) => {
    dispatch(changeTodo(id));
  };
  return (
    <div className="App">
      <Form
        tempTodo={tempTodo}
        setTempTodo={setTempTodo}
        onClickAddTodoHandler={onClickAddTodoHandler}
      />
      <Main
        mainTitle={"Working...🔥"}
        globalTodo={globalTodo}
        done={false}
        onClickDeleteHandler={onClickDeleteHandler}
        onClickChangeHandler={onClickChangeHandler}
        change={"완료"}
        navigate={navigate}
      />

      <Main
        mainTitle={"Done..!🎉"}
        globalTodo={globalTodo}
        done={true}
        onClickDeleteHandler={onClickDeleteHandler}
        onClickChangeHandler={onClickChangeHandler}
        change={"취소"}
        navigate={navigate}
      />
    </div>
  );
};

export default Home;
