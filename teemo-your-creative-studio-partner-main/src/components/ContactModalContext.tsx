import { createContext, useContext, useState, ReactNode } from "react";
import ContactModal from "./ContactModal";

type ModalType = "project" | "call" | null;

interface ContactModalContextType {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
};

export const ContactModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal 
        isOpen={modalType !== null} 
        onClose={closeModal} 
        type={modalType} 
      />
    </ContactModalContext.Provider>
  );
};
