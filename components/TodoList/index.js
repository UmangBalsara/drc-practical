/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { setTodoList } from "@/store/actions/todo";
import moment from "moment";
import { useRouter } from "next/router";

const TodoList = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const getTodoList = () => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const data = JSON.parse(localStorage.getItem(user));
      if (data) {
        dispatch(setTodoList(data));
      } else {
        dispatch(setTodoList([]));
      }
    } else {
      dispatch(setTodoList([]));
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const { todos = [] } = useSelector((state) => state.todo);

  const onClickEdit = useCallback((id) => {
    router.push(`/todo/update?id=${id}`);
  }, []);

  return (
    <div className="px-4">
      {todos.length ? (
        <>
          {todos.map((item) => (
            <div
              key={item.id}
              className="bg-violet-50 max-w-xl p-2 shadow mx-auto rounded-md mb-4"
            >
              <h1>Title: {item.title}</h1>
              <p>Description: {item.description}</p>
              <p>
                Date/Time: {moment(item.date).format("YYYY/MM/DD HH:MM:SS")}{" "}
              </p>
              <Button
                title="Edit"
                className="mx-0 mt-2"
                onClick={() => onClickEdit(item.id)}
              />
            </div>
          ))}
        </>
      ) : (
        <h1 className="text-center">Todo List Not Found</h1>
      )}
    </div>
  );
};

export default TodoList;
