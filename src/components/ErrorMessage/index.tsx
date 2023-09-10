import React from 'react';

interface AlertProps {
  type: 'error';
  message: string;
}

const ErrorMessage: React.FC<AlertProps> = ({ type, message }) => {
  const alertClasses = {
    error: 'bg-red-500 text-white font-bold rounded-t px-4 py-2 mt-12',
  };

  return (
    <div role="alert">
      <div className={alertClasses[type]}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      <div
        className={`border border-t-0 border-${type}-400 rounded-b bg-${type}-100 px-4 py-3 text-${type}-700 bg-white `}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
