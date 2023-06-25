import React from "react";
import Head from "next/head";
import Header from "../Header";
import Input from "../Input";
import Button from "../Button";
import useAddTodoForm from "./useAddTodoForm";
import DateTimeInput from "../DateTimeInput";

const AddTodoForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useAddTodoForm();
  return (
    <>
      <Head>
        <title>Add Todo</title>
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
                Add Todo
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <Input
                    label="Title"
                    id="title"
                    register={register}
                    errors={errors}
                    type="text"
                  />
                </div>
                <div className="p-2 w-full">
                  <Input
                    label="Description"
                    id="description"
                    register={register}
                    errors={errors}
                    type="text"
                  />
                </div>
                <div className="p-2 w-full">
                  <DateTimeInput
                    label="Date/Time"
                    id="date"
                    register={register}
                    errors={errors}
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

export default AddTodoForm;
