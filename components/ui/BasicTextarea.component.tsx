import React from "react";

interface IBasicTextarea {
  className?: string;
  placeholder: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const BasicTextarea: React.FC<IBasicTextarea> =
  React.forwardRef(({  ...props }: IBasicTextarea, ref) => {
    return (
      <>
        <textarea
          id="message"
          style={{
            maxHeight: '300px',
            minHeight: '100px',
            height: '100px'
        }}
          className={`w-full block p-2.5 sm:text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded border border-gray-300 appearance-none ${props.className}`}
          {...props}
        >
        </textarea>
      </>
    )
})

BasicTextarea.displayName = "BasicTextarea";

export default BasicTextarea;
