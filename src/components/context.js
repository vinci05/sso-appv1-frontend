import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationToast, setVerificationToast] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVerificationToast(false);
  };

  return (
    <AppContext.Provider
      value={{ isModalOpen, openModal, closeModal, verificationToast, setVerificationToast }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
