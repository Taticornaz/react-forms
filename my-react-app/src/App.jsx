import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const TextFormatter = () => {
  const [inputText, setInputText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    const formatted = inputText.toUpperCase();
    setFormattedText(formatted);
  };

  return (
    <div className="container mt-5">
      <h2>Добавить текст</h2>
      <div className="mb-3">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Введите текст"
          rows="5"
        />
      </div>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Показать текст
      </button>

      <div className="mt-3">
        {formattedText && (
          <p style={{ color: 'blue', fontWeight: 'bold' }}>
            {formattedText}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextFormatter;
