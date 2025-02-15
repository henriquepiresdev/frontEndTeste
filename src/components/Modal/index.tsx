import React, { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  handleToggleModal: () => void;
  children: ReactNode;
};

export function ModalCustom({ open, handleToggleModal, children }: ModalProps) {
  if (!open) return null;

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-55 z-50 overflow-hidden!"
      onClick={handleToggleModal}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full flex justify-center items-center"
        onClick={handleContentClick}
      >
        {children}
      </div>
    </div>
  );
}
