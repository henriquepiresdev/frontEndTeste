import React, { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  handleOpen: () => void;
  children: ReactNode;
};

export function ModalCustom({ open, handleOpen, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-55 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        {children}
      </div>
      <div className="absolute inset-0" onClick={handleOpen}></div>
    </div>
  );
}
