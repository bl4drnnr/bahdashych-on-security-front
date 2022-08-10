import React from 'react';

interface IBasicButton {
  children: JSX.Element
}

// eslint-disable-next-line react/display-name
const BasicButton = React.forwardRef(({children, ...props}: IBasicButton, ref) => {
  return (
    <>
      <button
        {...props}
        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none'
      >{children}</button>
    </>
  )
});

export default BasicButton;
