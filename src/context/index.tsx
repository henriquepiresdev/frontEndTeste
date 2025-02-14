// UserContext.tsx
import React, { createContext, useContext, useState } from "react";

// Definindo o tipo do contexto
type UserContextType = {
  username: string;
  setUsername: (username: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
