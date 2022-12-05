const Main = ({
  mainTitle,
  globalTodo,
  done,
  onClickDeleteHandler,
  onClickChangeHandler,
  change,
  navigate,
}) => {
  return (
    <div className="main">
      <div className="mainTitle">{mainTitle}</div>
      <div className="mainContent">
        {globalTodo
          .filter((todo) => todo.done === done)
          .map((a) => {
            return (
              <div className="mainContentindi">
                {/* <div>{a.id}</div> */}
                <h2>{a.title}</h2>
                <p>{a.content}</p>

                <div className="mainContentindiButton">
                  <button
                    onClick={() => {
                      onClickDeleteHandler(a.id);
                    }}
                  >
                    삭제
                  </button>

                  <button
                    onClick={() => {
                      onClickChangeHandler(a.id);
                    }}
                  >
                    {change}
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/todo/${a.id}`);
                    }}
                  >
                    상세보기
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
