import React from 'react';
import Header from './Header';

const App: React.FC = () => {
  return (
    <div className='bg-stone-100 dark:bg-gradient-to-tr from-gray-700 via-gray-900 to-black h-screen'>
     <Header></Header>
    </div>
  );
}

export default App;
