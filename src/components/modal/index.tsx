import { FC, ReactNode, useEffect } from "react";
import "./styles.scss";
import { ReactPortal } from "../react-portal";

type ModalProps = {
  children: ReactNode;
  handleClose: () => void;
  isOpen: boolean;
};

export const Modal: FC<ModalProps> = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="modal">
        <button onClick={handleClose} className="modal__close-btn">
          <span
            style={{
              display: "inline-block",
              lineHeight: 0.6,
              rotate: "45deg",
            }}
          >
            +
          </span>
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </ReactPortal>
  );
};
