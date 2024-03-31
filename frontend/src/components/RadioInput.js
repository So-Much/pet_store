import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function RadioInput({
  name = "",
  defaultValue = "",
  selections = [],
  handleValueChange = () => {},
}) {
    const [value, setValue] = useState(defaultValue);
  return (
    <div className="flex gap-4">
      {selections.map((option) => {
        return (
          <div key={option} className="flex items-center gap-2">
            <input
              type="radio"
              id={name}
              name={name}
              value={option}
              onChange={(e) => {
                handleValueChange(e);
                setValue(option);
              }}
                checked={value === option}
            />
            <label htmlFor={name}>{option}</label>
          </div>
        );
      })}
    </div>
  );
}
