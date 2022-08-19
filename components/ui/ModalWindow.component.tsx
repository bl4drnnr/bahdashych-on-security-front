import React from "react";
import BasicInput from "./BasicInput.component";

interface IModalWindow {
  title: string;
  text: string;
  action: (reason: string) => void
  close: () => void
}


const ModalWindow = ({ text, title, action, close }: IModalWindow) => {
  const [reason, setReason] = React.useState('')
  return (
    <div id="defaultModal"
         className={"overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full h-modal md:h-full backdrop-opacity-10 backdrop-invert bg-black/50"}>
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto m-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex justify-between items-start p-4 rounded-t border-b">
            <h3 className="text-xl font-semibold text-gray-900">
              {title}
            </h3>
            <button
              onClick={close}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500">
              {text}
            </p>
          </div>
          <BasicInput
            type={'text'}
            className={'w-1/2 mb-3 m-auto rounded'}
            value={reason}
            placeholder={'Reason'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setReason(e.target.value)}
          />
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
            <button data-modal-toggle="defaultModal" type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={() => action(reason)}
            >
              Ban
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
