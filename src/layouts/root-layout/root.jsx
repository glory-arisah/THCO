import './index.scss'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/side-bar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarContext } from '@/contexts/SidebarContext'

export default function root() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  const handleSidebarState = (operation) => {
    switch (operation) {
      case 'OPEN':
        setSidebarExpanded(true)
        break
      case 'CLOSE':
        setSidebarExpanded(false)
        break
    }
  }

  return (
    <div className={`layout--container ${sidebarExpanded ? 'sidebar-expanded' : ''}`}>
      <SidebarContext.Provider value={{sidebarExpanded, handleSidebarState}}>
        <Sidebar />
        <main className='flex-1'>
          <Navbar />
          <Outlet />
        </main>
      </SidebarContext.Provider>
    </div>
  )
}
