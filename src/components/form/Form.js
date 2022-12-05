import "./style.css";

const Form = ({ tempTodo, setTempTodo, onClickAddTodoHandler }) => {
  return (
    <div className="input">
      <form className="inputContent">
        <span className="inputText">제목</span>
        <input
          className="inputBox"
          onChange={(e) => {
            let copy = [...tempTodo];
            copy[0] = e.target.value;
            setTempTodo(copy);
          }}
          value={tempTodo[0]}
        />
        <span className="inputText">내용</span>
        <input
          className="inputBox"
          onChange={(e) => {
            let copy = [...tempTodo];
            copy[1] = e.target.value;
            setTempTodo(copy);
          }}
          value={tempTodo[1]}
        />
      </form>

      <button
        className="addButton"
        onClick={() => {
          onClickAddTodoHandler();
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default Form;
