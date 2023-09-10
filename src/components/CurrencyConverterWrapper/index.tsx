import React, { ReactNode } from 'react';

interface CurrencyConverterWrapperProps {
  children: ReactNode;
}

const CurrencyConverterWrapper: React.FC<CurrencyConverterWrapperProps> = ({
  children,
}) => {
  return (
    <div className="h-screen  bg-gradient-to-b from-sky-800 via-sky-600 to-sky-400 flex justify-center">
      <div className="md:w-3/4 lg:w-2/3 h-5/6 md:h-2/3 p-4 m-4 md:mt-12 flex flex-col justify-center items-center bg-sky-950 border border-sky-500 rounded-3xl">
        {children}
      </div>
    </div>
  );
};

export default CurrencyConverterWrapper;
