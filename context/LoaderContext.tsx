import React, { ReactNode, createContext, useContext, useState } from 'react';
import Loader from '~/components/LoaderScreen';
export const useLoader = ()=>{
    const context = useContext(LoaderContext);
      if (!context) {
        throw new Error("useLoader must be used within a LoaderProvider");
      }
      return context;
  }
type LoaderContext = {
  showLoader: () => void;
  hideLoader: () => void;
};

type LoaderContextProvider = {
  children: ReactNode;
};

export const LoaderContext = createContext<LoaderContext | undefined>(
  undefined
);

export const LoaderProvider: React.FC<LoaderContextProvider> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [loaderMessage, setLoaderMessage] = useState<string | undefined>();

  const contextValue: LoaderContext = {
    showLoader: () => {
      setIsVisible(true);
    },
    hideLoader: () => {
      setIsVisible(false);
    },
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {<Loader loading={isVisible} />}
      {children}
    </LoaderContext.Provider>
  );
};