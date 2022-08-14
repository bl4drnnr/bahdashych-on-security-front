import React from 'react';

interface IBasicInput {
  className: string;
  type: string;
  placeholder: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicInput: React.FC<IBasicInput> =
  React.forwardRef(({ ...props }: IBasicInput, ref) => {
  return (
    <>
      <input
        { ...props }
        className={`appearance-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${props.className}`}
      />
    </>
  );
});

BasicInput.displayName = "BasicInput";

export default BasicInput;
