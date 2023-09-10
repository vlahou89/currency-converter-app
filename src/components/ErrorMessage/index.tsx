import React from 'react';

interface AlertProps {
  message: string;
}

const ErrorMessage: React.FC<AlertProps> = ({ message }) => {
  return (
    <div role="alert">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 mt-12">
        Alert
      </div>
      <div
        className={`border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 `}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
