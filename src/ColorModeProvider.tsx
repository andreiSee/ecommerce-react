import { createContext, useEffect, useState } from 'react';

export const ColorModeContext = createContext<ColorModeContextType | null>(
  null
);

type Props = { children: React.ReactNode };

const ColorModeProvider = ({ children }: Props) => {
  const storedColorMode = localStorage.getItem('colorMode');
  const preColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  const [colorMode, setColorMode] = useState(storedColorMode || preColorMode);

  const toggleColorMode = () => {
    const newColorMode = colorMode == 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', colorMode);
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
