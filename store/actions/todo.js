import { TODO_LIST, ADD_TODO, UPDATE_TODO } from "../types";

const setTodoList = (payload) => ({
  type: TODO_LIST,
  payload,
});

const setAddTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

const setUpdateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});

export { setTodoList, setAddTodo, setUpdateTodo };
