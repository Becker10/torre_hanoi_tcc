import React, { ReactNode } from "react";

interface ModalType {
  title: string,
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className="modal-btn" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            <div className='modal-btn-box'>
              <div className='modal-title'>
                {props.title}
              </div>
              <div className='modal-content'>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
