/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const MessageForm = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      onSend(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="input-area">
      <img style={{height:"35px",marginRight:"5px"}} src="src\Components\image-juliusomo.png" alt="" />
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add your comment..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageForm;
