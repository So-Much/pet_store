import React, { useState } from "react";

const AutocompleteInput = ({ suggestions=[], name="", defaultValue="", handleChangeComplete=()=>{} }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    const filtered = suggestions.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredSuggestions(filtered);

    setShowSuggestions(filtered.length > 0);
  };

  const handleSelectSuggestion = (value) => {
    setInputValue(value);
    setFilteredSuggestions([]);
    setShowSuggestions(false);

    handleChangeComplete(value);
  };

  window.onclick = () => {
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  }


  return (
    <div className="relative">
      <input
        type="text"
        defaultValue={defaultValue}
        value={inputValue || defaultValue}
        name={name}
        onChange={(e) => {
          handleChange(e);
          handleChangeComplete(e.target.value)
        }}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-indigo-500 font-normal w-full"
      />
      {showSuggestions && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 py-1 shadow-lg">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-3 py-1 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
