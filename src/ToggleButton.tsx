import React, { useState } from "react";

const ToggleButton: React.FC = () => {
  const [themeColor, setThemeColor] = useState<string>("white");

   const handleToggle = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (themeColor === "white") {
      document.documentElement.classList.add("dark");
      setThemeColor("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setThemeColor("white");
    }
  }

  return (
    <button
      onClick={handleToggle}
      className="absolute bottom-7 right-7 px-6 py-1 font-righteous align-middle rounded-md bg-indigo-500 shadow-lg shadow-indigo-500/70 text-stone-50 hover:bg-indigo-700"
    >
      Toggle
    </button>
  );
};

export default ToggleButton;
