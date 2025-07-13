import React, { useContext, createContext, useState } from "react";

interface MobileChatProps {
  isChatOpen?: boolean;
  setIsChatOpen?: (value: boolean) => void;
  openChat?: () => void;
  closeChat?: () => void;
}

const MobileChatContext = createContext<MobileChatProps | undefined>(
  undefined
);

export const MobileChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);

  return (
    <MobileChatContext.Provider value={{ 
      isChatOpen, 
      setIsChatOpen, 
      openChat, 
      closeChat 
    }}>
      {children}
    </MobileChatContext.Provider>
  );
};

export const useMobileChat = (): MobileChatProps => {
  const context = useContext(MobileChatContext);
  if (!context) {
    throw new Error("useMobileChat must be used within a MobileChatProvider");
  }
  return context;
};