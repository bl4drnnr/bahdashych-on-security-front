import React from 'react';

// eslint-disable-next-line react/display-name
const BasicInput = React.forwardRef(({ ...props }: any, ref) => {
  return (
    <input
      { ...props }
      className={`appearance-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${props.className}`}
    />
  );
});

export default BasicInput;
