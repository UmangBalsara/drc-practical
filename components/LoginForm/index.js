import React from "react";
import Header from "../Header";
import Head from "next/head";
import useLoginForm from "./useLoginForm";
import Input from "../Input";
import Button from "../Button";

const LoginForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="max-h-full">
        <Header />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-gray-600 body-font relative"
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Login
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <Input
                    label="Email"
                    id="email"
                    register={register}
                    errors={errors}
                    type="email"
                  />
                </div>
                <div className="p-2 w-full">
                  <Input
                    label="Password"
                    id="password"
                    register={register}
                    errors={errors}
                    type="password"
                  />
                </div>
                <div className="p-2 w-full mt-4">
                  <Button title="Submit" type="submit" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
