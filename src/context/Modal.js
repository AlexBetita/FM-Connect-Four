import { useState, useRef, createContext, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const modelRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => setValue(modelRef.current), []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modelRef} />
    </>
  );
};

export const Modal = ({ onClose, children }) => {
  const modalNode = useContext(ModalContext);

  return (
    modalNode &&
    createPortal(
      <div id="modal">
        <div id="modal-background" onClick={onClose} />
        <div id="modal-content">{children}</div>
      </div>,
      modalNode
    )
  );
};

export default ModalProvider;
