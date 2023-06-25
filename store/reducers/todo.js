/* eslint-disable import/no-anonymous-default-export */
import { TODO_LIST, ADD_TODO, UPDATE_TODO } from "../types";

const initialstate = {
  todos: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case TODO_LIST:
      return Object.assign({}, state, {
        todos: action.payload,
      });

    case ADD_TODO:
      const user = sessionStorage.getItem("user");
      let data;
      if (user) {
        data = JSON.parse(localStorage.getItem(user));
        if (data) {
          localStorage.setItem(user, JSON.stringify([action.payload, ...data]));
        } else {
          localStorage.setItem(user, JSON.stringify([action.payload]));
        }
      }
      return Object.assign({}, state, {
        todos: data ? [action.payload, ...data] : action.payload,
      });

    case UPDATE_TODO:
      const userFound = sessionStorage.getItem("user");
      let list;
      if (userFound) {
        list = JSON.parse(localStorage.getItem(userFound));
        if (list) {
          const lists = list.map((x) => {
            if (x.id === action.payload.id) {
              return {
                ...x,
                title: action.payload.title,
                description: action.payload.description,
                date: action.payload.date,
              };
            } else {
              return {
                ...x,
              };
            }
          });
          localStorage.setItem(userFound, JSON.stringify([...lists]));
        }
      }
      return Object.assign({}, state, {
        todos: action.payload,
      });

    default:
      return state;
  }
};
