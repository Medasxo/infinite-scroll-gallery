import React from "react";
import Header from "./Header";

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 dark:bg-gradient-to-tr dark:from-gray-700 dark:via-gray-900 dark:to-black h-screen">
      <Header></Header>
    </div>
  );
};

export default App;
