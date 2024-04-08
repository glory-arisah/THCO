import './index.scss'
import { useContext } from 'react'
import { SidebarContext } from '@/contexts/SidebarContext'
import burgerIconForMobile from '@/assets/images/burger.svg'
import chevronDownIcon from '@/assets/images/chevrondown.svg'
import notificationIcon from '@/assets/images/notification.svg'
import homeIcon from '@/assets/images/dashboard/home.svg'

export default function Navbar () {
  const { handleSidebarState } = useContext(SidebarContext)

  return (
    <div className='top-nav'>
      <div className='top-nav-1'>
        <button
          onClick={() => handleSidebarState('OPEN')}
          className='burger-icon--wrapper'
        >
          <img src={burgerIconForMobile} />
        </button>
        <div className='dashboard-2'>Dashboard</div>
        <div className='profile'>
          <div className='nav-header-dropdown--wrapper'>
            <span className='nannys-shop'>Nanny’s Shop</span>
            <div className='nav-header--chevron-down'>
              <img
                className='nav-header--chevron-down__icon'
                src={chevronDownIcon}
              />
            </div>
          </div>
          <div className='iconly-bulk-notification'>
            <img className='notification' src={notificationIcon} />
          </div>
          <div className='nav-header--profile__img'></div>
        </div>
      </div>
      <div className='breadcrumbs'>
        <img className='home' src={homeIcon} />
      </div>
    </div>
  )
}
