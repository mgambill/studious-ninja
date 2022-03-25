import Stepper from './Views/Stepper'
import Tabs from './Views/Tabs'
import Toggle from './Views/Toggle'

import { useState } from 'react'

export default function App() {
  const [currentPage, setCurrentPage] = useState('tabs')
  return (

    <div className='max-w-5xl p-10 mx-auto mt-20'>
      <div className='grid grid-cols-2 w-44'>
        <button className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" onClick={() => setCurrentPage('stepper')}>Stepper</button>
        <button className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" onClick={() => setCurrentPage('tabs')}>Tabs</button>
      </div>

      <div className='p-10 mt-10 rounded bg-zinc-100'>
        {currentPage === 'tabs' && <Tabs />}
        {currentPage === 'stepper' && <Stepper />}
        {currentPage === 'toggle' && <Toggle />}
      </div>
    </div>

  )
}

