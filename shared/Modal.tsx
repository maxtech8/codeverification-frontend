import React, { ReactNode } from "react"

interface IModal {
  onClose: () => any
  children: ReactNode
  isVisible: Boolean
}

const Modal = ({ onClose, children, isVisible }: IModal) => {
  return (
    <div
      className={`fixed w-screen h-screen z-[40] top-0 left-0 flex items-center justify-center
      ${isVisible ? "block" : "hidden"}`}
      onClick={async (e) => (e.target === e.currentTarget && onClose ? await onClose() : () => {})}
    >
      {isVisible && (
        <div className="relative w-full h-full">
          <div className="absolute left-0 top-0 w-full h-full backdrop-blur-[7px] z-[1]" />
          <div className="flex justify-center items-center relative z-[2] w-full h-full">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
