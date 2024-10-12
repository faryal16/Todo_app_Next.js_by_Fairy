import React from "react"
import { ImCancelCircle } from "react-icons/im";

interface ModleProps{
    modalOpen : boolean,
    setModalOpen: (open:boolean) => boolean | void;
    children: React.ReactNode
}


const Modal:React.FC<ModleProps> = ( {modalOpen, setModalOpen , children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
    <div className="modal-box h-52 border-green-400 border-4">
      
        <label onClick={() => setModalOpen(false)} className="float-right"><ImCancelCircle size={15} /></label>
      <div className="modal-action">
        {children}
      </div>
    </div>
  </div>
  )
}

export default Modal