import React, { useRef, useState, useEffect } from 'react';
import './style.css';

const Modal = ({ title, visible, setVisible, children }) => {
  const ref = useRef();
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (visible) {
      setClosing(false);
    }
  }, [visible]);

  const close = () => {
    setClosing(() => true);
    let id = setTimeout(() => {
      clearTimeout(id);
      setVisible(false);
    }, 2000);
  };

  return visible ? (
    <div ref={ref} className={closing ? 'modal modal--closing' : 'modal'}>
      {/* modal__backdrop */}
      <div className="modal__backdrop" onClick={close}></div>

      {/* modal__body */}
      <div className="modal__body">
        <div className="modal__body__header">
          <div className="modal__body__header__title">{title}</div>

          <i className="modal__body__header__close-btn" onClick={close}>
            &times;
          </i>
        </div>

        <div className="modal__body__content">{children}</div>

        <div className="modal__body__footer">
          <button>cancel</button>
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;
