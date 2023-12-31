import React, { ReactNode } from "react";
export interface inputProps {
  icon: ReactNode;
  placeholder: string;
  type?: string;
}

const Input: React.FC<inputProps> = ({ icon, placeholder, type }) => {
  return (
    <div className="mt-[20px] border  p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div>{icon}</div>
          <input
            type={type}
            className="outline-none w-full text-[#879EA4] font-[500] text-[16px]"
            placeholder={placeholder}
            id=""
          />
        </div>
        {type == "password" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10V10Z"
              stroke="#96A7AF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.04834 10C3.11001 6.61919 6.26917 4.16669 10 4.16669C13.7317 4.16669 16.89 6.61919 17.9517 10C16.89 13.3809 13.7317 15.8334 10 15.8334C6.26917 15.8334 3.11001 13.3809 2.04834 10V10Z"
              stroke="#96A7AF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Input;
