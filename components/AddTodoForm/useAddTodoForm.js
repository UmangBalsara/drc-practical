/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAddTodo } from "@/store/actions/todo";

const schema = yup
  .object({
    title: yup
      .string()
      .required("Please enter title")
      .min(2, "Please enter minimun 2 characters"),
    description: yup
      .string()
      .required("Please enter description")
      .min(2, "Please enter minimun 2 characters"),
    date: yup.string().required("Please select date and time"),
  })
  .required();

const useAddTodoForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // When user is not login and access add todo routes then redirect to login page
  useEffect(() => {
    if (typeof window !== undefined) {
      const userFound = sessionStorage.getItem("user");
      if (!userFound) {
        router.replace("/");
      }
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
    },
  });

  const onSubmit = async (data) => {
    const addData = {
      ...data,
      id: Math.floor(100000000 + Math.random() * 900000000).toString(),
    };

    await dispatch(setAddTodo(addData));
    router.replace("/dashboard");
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useAddTodoForm;
