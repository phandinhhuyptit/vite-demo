import { createContext, useContext } from 'react';

interface ModalContextState {
  onClose: () => void;
}

const ModalContext = createContext<ModalContextState>({
  onClose: () => undefined,
});

export const useModalContext = () => useContext(ModalContext);

export default ModalContext;
