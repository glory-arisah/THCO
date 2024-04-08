import './index.scss'
import { useContext } from 'react'
import { SidebarContext } from '@/contexts/SidebarContext'
import metricLogo from '@/assets/images/metriclogo.svg'
import dashboardIcon from '@/assets/images/dashboard.svg'
import ordersIcon from '@/assets/images/orders.svg'
import customersIcon from '@/assets/images/customers.svg'
import inventoryIcon from '@/assets/images/inventory.svg'
import conversationIcon from '@/assets/images/conversation.svg'
import settingsIcon from '@/assets/images/settings.svg'
import customerSupportIcon from '@/assets/images/customersupport.svg'
import giftsIcon from '@/assets/images/gifts.svg'
import logoutIcon from '@/assets/images/logout.svg'
import arrowRightIcon from '@/assets/images/arrowright.svg'
import closeIcon from '@/assets/images/close.svg'
import chevronRight from '@/assets/images/sidebar/chevronright.svg'

const Sidebar = () => {
  const { sidebarExpanded, handleSidebarState } = useContext(SidebarContext)

  return (
    <>
      <div className={`side-bar ${!sidebarExpanded ? 'hide' : ''}`}>
        {/* SHOW ON MOBILE */}
        <button onClick={() => handleSidebarState('CLOSE')} className="burger-icon--wrapper">
          <img src={closeIcon} />
        </button>
        {/* SHOW OTHER WISE */}
        <div className='logo'>
          <div className='group-1'>
            <img className='graph' src={metricLogo} />
          </div>
          <div className='metrix'>Metrix</div>
        </div>
        <div className='menu-items'>
          <div className='menu-item active'>
            <div className='sidebar-icon iconly-bulk-category'>
              <img className='category' src={dashboardIcon} />
            </div>
            <div className='sidebar-text dashboard-1'>Dashboard</div>
          </div>
          <div className='menu-item'>
            <div className='sidebar-icon iconly-light-bag'>
              <img className='bag' src={ordersIcon} />
            </div>
            <div className='sidebar-text orders'>Orders</div>
            <div className='frame-21 indicator--wrapper order'>
              <span className='container-1 indicator'>3</span>
            </div>
          </div>
          <div className='menu-item menu-item-1'>
            <div className='sidebar-icon iconly-light-2-user'>
              <img className='user' src={customersIcon} />
            </div>
            <div className='sidebar-text customers'>Customers</div>
          </div>
          <div className='menu-item menu-item-2'>
            <div className='sidebar-icon iconly-light-folder'>
              <img className='folder' src={inventoryIcon} />
            </div>
            <div className='sidebar-text inventory'>Inventory</div>
          </div>
          <div className='menu-item menu-item-3'>
            <div className='sidebar-icon iconly-light-chat'>
              <img className='chat' src={conversationIcon} />
            </div>
            <div className='sidebar-text conversations'>Conversations</div>
            <div className='frame-2 indicator--wrapper conversation'>
              <span className='container indicator'>16</span>
            </div>
          </div>
          <div className='menu-item menu-item-4'>
            <div className='sidebar-icon iconly-light-setting'>
              <img className='setting' src={settingsIcon} />
            </div>
            <div className='sidebar-text settings'>Settings</div>
          </div>
        </div>
        <div className='logout sidebar-contact-support'>
          <img className='fiheadphones headphone-icon' src={customerSupportIcon} />
          <div className='sidebar-text contact-support'>Contact Support</div>
        </div>
        <div className='banner free-gift--wrapper'>
          <div className='frame-7 free-gift-awaits-you--wrapper'>
            <img className='figift free-gift-icon' src={giftsIcon} />
            <div className='sidebar-text free-gift-awaits-you'>Free Gift Awaits You!</div>
          </div>
          <div className='frame-6 upgrade-your-account--wrapper'>
            <span className='sidebar-text upgrade-your-account'>Upgrade your account</span>
            <div className='chevron-down fichevron-down-2'>
              <img className='vector-7' src={chevronRight} />
            </div>
          </div>
        </div>
        <div className='bottom-1 logout--container'>
          <div className='iconly-bulk-logout'>
            <img className='logout-1' src={logoutIcon} />
          </div>
          <div className='logout-2'>Logout</div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
