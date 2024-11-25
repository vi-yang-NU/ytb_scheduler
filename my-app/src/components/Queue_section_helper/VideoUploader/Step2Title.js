import React, { useState, useEffect } from 'react';

const Step2Title = ({ setTitle, setAltTitles, skipStep, setIsStepValid }) => {
  const [mainTitle, setMainTitle] = useState('');
  const [altTitles, setAltTitlesState] = useState(['', '']);

  // Update the validation status based on the input fields
  useEffect(() => {
    const allFieldsFilled = mainTitle.trim() !== '' && altTitles.every((title) => title.trim() !== '');
    setIsStepValid(allFieldsFilled);
  }, [mainTitle, altTitles, setIsStepValid]);

  const handleAltTitleChange = (index, value) => {
    const updatedAltTitles = [...altTitles];
    updatedAltTitles[index] = value;
    setAltTitlesState(updatedAltTitles);
    setAltTitles(updatedAltTitles);
  };

  return (
    <div className="mx-auto w-2/3 text-center">
      <h2 className="text-xl font-bold mb-4">What is the name of this video?</h2>
      <input
        type="text"
        value={mainTitle}
        onChange={(e) => {
          setMainTitle(e.target.value);
          setTitle(e.target.value);
        }}
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter main title"
      />
      <h3 className="text-lg mb-4">Alternative Titles</h3>
      {altTitles.map((title, index) => (
        <input
          key={index}
          type="text"
          value={title}
          onChange={(e) => handleAltTitleChange(index, e.target.value)}
          className="w-full p-2 border rounded mb-2"
          placeholder={`Alternative Title ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Step2Title;
