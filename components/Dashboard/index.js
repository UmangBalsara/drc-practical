/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../Header";
import TodoList from "../TodoList";
import Button from "../Button";

const Dashboard = () => {
  const router = useRouter();

  // User Directly go to dashboard screen without login then redirect to index screen
  useEffect(() => {
    if (typeof window !== undefined) {
      const userFound = sessionStorage.getItem("user");
      if (!userFound) {
        router.replace("/");
      }
    }
  }, []);

  const onAddTodo = useCallback((e) => {
    e.preventDefault();
    router.push("/todo/add");
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      <div className="my-10 px-4">
        <Button
          type="button"
          title="Add Todo"
          onClick={onAddTodo}
          className={"mx-0"}
        />
      </div>
      <TodoList />
    </>
  );
};

export default Dashboard;
