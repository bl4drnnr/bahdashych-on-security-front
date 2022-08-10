import React from 'react';

interface IBasicButton {
  children: string;
  onClick: () => Promise<void>;
}

const BasicButton: React.FC<IBasicButton> =
  React.forwardRef(({children, ...props}: IBasicButton) => {
  return (
    <>
      <button
        {...props}
        className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none'
      >{children}</button>
    </>
  )
});

BasicButton.displayName = "BasicButton"

export default BasicButton;
