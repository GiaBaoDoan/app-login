import React from "react";
interface InputProps {
  title: string;
  placehoder: string;
  type: "text" | "textarea";
}
const Input: React.FC<InputProps> = ({ title, placehoder, type }) => {
  return (
    <div className="space-y-2 mt-5">
      <label className="font-medium" htmlFor="title">
        {title}
      </label>
      {type == "text" && (
        <input
          type={type}
          placeholder={placehoder}
          className="border border-gray-200 rounded-md outline-none py-3 px-4 w-full"
        />
      )}
      {type == "textarea" && (
        <textarea
          placeholder={placehoder}
          className="border border-gray-200 rounded-md outline-none w-full  p-3"
        ></textarea>
      )}
    </div>
  );
};

export default Input;
