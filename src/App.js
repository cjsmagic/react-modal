import React, { useState } from 'react';
import './style.css';
import Modal from './Modal';

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h1>Demo modal</h1>
      <Modal visible={visible} setVisible={setVisible} title="I am a modal">
        <p>Start editing to see some magic happen :)</p>

        <p>Start editing to see some magic happen :)</p>
      </Modal>
      <button onClick={() => setVisible((prev) => !prev)}>open modal</button>
    </div>
  );
}
