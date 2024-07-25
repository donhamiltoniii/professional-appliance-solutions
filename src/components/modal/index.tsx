import { ReactNode } from "react";

import "./styles.scss";

type ModalProps = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  hasCloseBtn,
  onClose,
  children,
}) => {
  const handleCloseModal = () => {
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog className="modal" onKeyDown={handleKeyDown} open={isOpen}>
      {hasCloseBtn && (
        <button className="modal-close-btn" onClick={handleCloseModal}>
          Close
        </button>
      )}
      {children}
    </dialog>
  );
};
