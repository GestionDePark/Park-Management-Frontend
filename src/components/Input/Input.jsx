import React from 'react';
import { useState } from 'react';
import ClosedEye from '../Icon/ClosedEye';
import OpenedEye from '../Icon/OpenedEye';

export default function Input({ id, name, type, placeholder, onChange, value }) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordInput = type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {placeholder}
      </label>
      <div className="mt-2 relative flex ">
        <input
          id={id}
          name={name}
          type={isPasswordInput && showPassword ? 'text' : type}
          autoComplete={id}
          required
          onChange={onChange}
          value={value}
          className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {isPasswordInput && (
          <button
            className=" absolute inset-y-0 right-0 mx-2 flex items-center cursor-pointer "
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <OpenedEye /> : <ClosedEye />}
          </button>
        )}
      </div>
    </div>
  );
}
