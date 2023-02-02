import React from 'react'
import '../index.css'

function Home() {
  return (
    <header className=' h-screen w-full bg-slate-500 bg-fixed'  >
      <nav className=' bg-slate-900 h-20  opacity-70 ' >
        <ul className=' flex items-center justify-between h-full w-2/5 m-auto'>
          <li className='text-lg text-slate-50 hover:cursor-pointer hover:scale-90 hover:opacity-80'  >Inicio</li>
          <li className='text-lg text-slate-50 hover:cursor-pointer hover:scale-90 hover:opacity-80' >Sudamerica</li>
          <li className='text-lg text-slate-50 hover:cursor-pointer hover:scale-90 hover:opacity-80' >Europa</li>
          <li className='text-lg text-slate-50 hover:cursor-pointer hover:scale-90 hover:opacity-80' >Internacional</li>
          <li className='text-lg text-slate-50 hover:cursor-pointer hover:scale-90 hover:opacity-80' >Noticias</li>
        </ul>
      </nav>
    </header>
  )
}

export default Home