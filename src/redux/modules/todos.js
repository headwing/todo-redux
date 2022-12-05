// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const changeTodo = (payload) => {
  return {
    type: CHANGE_TODO,
    payload: payload,
  };
};

// Initial State
const initialState = [
  {
    id: 1,
    title: "리액트 공부",
    content: "리액트 공부를 해봅시다!",
    done: false,
  },
  { id: 2, title: "산책하기", content: "강아지랑 산책", done: true },
];

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          title: action.payload[0],
          content: action.payload[1],
          done: false,
        },
      ];
    }
    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case CHANGE_TODO: {
      let copy = state.filter((todo) => todo.id !== action.payload);
      let copy2 = state.filter((todo) => todo.id === action.payload);
      copy2[0].done = !copy2[0].done;
      copy.push(...copy2);
      return copy;
    }
    default:
      return state;
  }
};
export default todos;
