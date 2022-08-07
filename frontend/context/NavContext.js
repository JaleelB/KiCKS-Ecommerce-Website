import { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export function NavContextProvider({ children }) {
  const [backgroundBlur, setBackgroundBlur] = useState(false);

  return (
    <NavContext.Provider value={{
        backgroundBlur, setBackgroundBlur
    }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  return useContext(NavContext);
}