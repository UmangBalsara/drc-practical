/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { users } from "@/utils/users";
import { useEffect } from "react";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Please enter email"),
    password: yup
      .string()
      .required("Please enter password")
      .min(8, "Password must have at least 8 characters"),
  })
  .required();

const useLoginForm = () => {
  const router = useRouter();

  // When user is already login and access login routes then redirect to dashboard page
  useEffect(() => {
    if (typeof window !== undefined) {
      const userFound = sessionStorage.getItem("user");
      if (userFound) {
        router.replace("/dashboard");
      }
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // console.log("data", data);
    const userFound = users.some(
      (x) => x.email === data.email && x.password === data.password
    );
    if (userFound) {
      sessionStorage.setItem("user", data.email);
      const getUserFoundData = localStorage.getItem(data.email);
      if (!getUserFoundData) {
        localStorage.setItem(data.email, JSON.stringify([]));
      }
      router.push("/dashboard");
    } else {
      alert("Please enter valid credentails");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export default useLoginForm;
