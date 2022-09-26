import React from "react";

const ScrollToTopButton: React.FC = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button
      onClick={handleClick}
      className="fixed w-20 h-20 bottom-5 left-5 bg-indigo-500 hover:bg-indigo-700 shadow-md shadow-indigo-500/70 rounded-full"
    >
      <p className="font-righteous text-stone-50 text-xl">TOP</p>
    </button>
  );
};

export default ScrollToTopButton;
