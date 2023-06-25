/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAddTodo, setUpdateTodo } from "@/store/actions/todo";

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

const useUpdateTodoForm = () => {
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
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      date: "",
    },
  });

  useEffect(() => {
    const id = router.query?.id;
    if (id) {
      const user = sessionStorage.getItem("user");
      if (user) {
        const lists = JSON.parse(localStorage.getItem(user));
        if (lists?.length) {
          const data = lists.filter((list) => list.id === id);
          if (data?.length) {
            setValue("title", data[0].title);
            setValue("description", data[0].description);
            setValue("date", data[0].date);
          }
        }
      }
    }
  }, []);

  const onSubmit = async (data) => {
    const updateData = {
      ...data,
      id: router.query.id,
    };

    await dispatch(setUpdateTodo(updateData));
    router.replace("/dashboard");
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useUpdateTodoForm;
