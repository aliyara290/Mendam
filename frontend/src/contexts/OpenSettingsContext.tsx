import React, { useContext, createContext, useState } from "react";

interface OpenSettingProps {
  openSettings?: boolean;
  setOpenSettings?: (value: boolean) => void;
}

const OpenSettingsContext = createContext<OpenSettingProps | undefined>(
  undefined
);


export const OpenSettingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openSettings, setOpenSettings] = useState<boolean>(false);


  return (
    <OpenSettingsContext.Provider value={{ openSettings, setOpenSettings }}>
      {children}
    </OpenSettingsContext.Provider>
  )
}



export const useSettings = (): OpenSettingProps => {
  const context = useContext(OpenSettingsContext)
  if (!context) {
    throw new Error("useMainContent must be used within a MainContentProvider");
  }
  return context;
}