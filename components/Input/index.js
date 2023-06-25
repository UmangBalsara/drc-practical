import React from "react";

const Input = ({
  label = "",
  id = "",
  type = "text",
  errors = {},
  register = () => {},
}) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="leading-7 text-sm text-gray-600">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id)}
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      {errors[id]?.message && (
        <p className="text-red-500">{errors[id].message}</p>
      )}
    </div>
  );
};

export default Input;
