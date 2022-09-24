import React from 'react'
import ToggleButton from './ToggleButton'

const Header: React.FC = () => {
  return (
    <div className='h-24 bg-stone-50 dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black flex justify-center items-center border-b-2 border-indigo-400 shadow-xl relative'>
        <h2 className='text-indigo-500 text-3xl font-extrabold drop-shadow-lg font-righteous'>Infinite Gallery</h2>
        <ToggleButton></ToggleButton>
    </div>
  )
}

export default Header