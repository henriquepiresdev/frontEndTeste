import React, { createContext, useContext, useState, ReactNode } from "react";

interface LimitContextType {
  limit: string;
  setLimit: React.Dispatch<React.SetStateAction<string>>;
}

const LimitContext = createContext<LimitContextType | undefined>(undefined);

interface LimitProviderProps {
  children: ReactNode;
}

export const LimitProvider: React.FC<LimitProviderProps> = ({ children }) => {
  const [limit, setLimit] = useState("16");
  return (
    <LimitContext.Provider value={{ limit, setLimit }}>
      {children}
    </LimitContext.Provider>
  );
};

export const useLimit = (): LimitContextType => {
  const context = useContext(LimitContext);
  if (!context) {
    throw new Error("useLimit must be used within a LimitProvider");
  }
  return context;
};
