import Stepper from './Views/Stepper'
import Tabs from './Views/Tabs'
import Toggle from './Views/Toggle'

import { useState } from 'react'

export default function App() {
  const [currentPage, setCurrentPage] = useState('stepper')
  return (

    <div className='p-10 max-w-5xl mx-auto mt-20'>
      <div className='grid grid-cols-2 w-44'>
        <button className="relative inline-flex text-center items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" onClick={() => setCurrentPage('stepper')}>Stepper</button>
        <button className="relative inline-flex text-center items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" onClick={() => setCurrentPage('tabs')}>Tabs</button>
      </div>

      <div className='p-10 bg-zinc-100 rounded mt-10'>
        {currentPage === 'tabs' && <Tabs />}
        {currentPage === 'stepper' && <Stepper />}
        {currentPage === 'toggle' && <Toggle />}
      </div>
    </div>

  )
}

