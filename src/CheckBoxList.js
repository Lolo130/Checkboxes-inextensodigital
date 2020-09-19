import React from "react";

export default function CheckBoxList({ options, isCheckedAll, onCheck }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isCheckedAll}
          onChange={e => onCheck("all", e.target.checked)}
        />
        {"Select all"}
      </label>
      <div>
        {options.map((option, index) => {
          return (
            <div>
              <label>
                <input
                  name={option.name}
                  type="checkbox"
                  value={option.value}
                  checked={option.checked}
                  onChange={e => onCheck(option.value, e.target.checked)}
                />
                {option.value}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
