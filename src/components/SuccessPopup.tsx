import React from 'react';

interface SuccessPopupProps {
  message: string;
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg text-center max-w-xs w-full">
        <div className='flex  flex-col justify-center items-center'>
        <div className="flex justify-center items-center w-16 h-16 bg-black rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
        <p className="text-black mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-black text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition"
        >
          Back
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
