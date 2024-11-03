// WhatsAppButton.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    const url = `https://wa.me/+918660449970?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <StyledWhatsAppButton>
      <button onClick={() => setIsOpen(!isOpen)}>
        <FaWhatsapp size={36} />
      </button>
      {isOpen && (
        <MessageContainer>
          <TextInputContainer>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={handleChange}
            />
            <SendIcon onClick={handleClick}>
              <FaPaperPlane />
            </SendIcon>
          </TextInputContainer>
        </MessageContainer>
      )}
    </StyledWhatsAppButton>
  );
};

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledWhatsAppButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 999; /* Ensure it appears above other elements */

  button {
    background-color: #25d366;
    color: white;
    border: none;
    padding: 0.5em;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${slideIn} 0.3s ease forwards;
  margin-top: 0.5em;
`;

const TextInputContainer = styled.div`
  position: relative;
  width: 200px;

  input {
    width: 100%;
    padding: 0.5em 2em 0.5em 0.5em; /* Padding for space for the icon */
    border-radius: 0.5em;
    border: 1px solid #ddd;
    outline: none;
  }
`;

const SendIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #25d366;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1ebc5a;
  }
`;

export default WhatsAppButton;
