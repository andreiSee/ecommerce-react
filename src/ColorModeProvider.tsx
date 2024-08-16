import { createContext, useState } from 'react';

export const ColorModeContext = createContext<ColorModeContextType | null>(
  null
);

function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const rootColorMode = document.documentElement;
  const [colorMode, setColorMode] = useState(
    rootColorMode.getAttribute('data-bs-theme') || 'light'
  );
  const colorModeHtml = (colorMode: string) => {
    rootColorMode.setAttribute('data-bs-theme', colorMode);
  };

  const toggleColorMode = () => {
    const newColorMode = colorMode == 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
    colorModeHtml(newColorMode);
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export default ColorModeProvider;
