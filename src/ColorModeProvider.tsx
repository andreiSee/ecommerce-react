import { createContext, useEffect, useState } from 'react';

export const ColorModeContext = createContext<ColorModeContextType | null>(
  null
);

function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const preColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  const [colorMode, setColorMode] = useState(preColorMode);

  const toggleColorMode = () => {
    const newColorMode = colorMode == 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export default ColorModeProvider;
