import { useState } from 'react'
import './assets/App.scss'
// import './App.css'
import dashboardIcon from './assets/images/dashboard.svg'
import ordersIcon from './assets/images/orders.svg'
import customersIcon from './assets/images/customers.svg'
import inventoryIcon from './assets/images/inventory.svg'
import conversationIcon from './assets/images/conversation.svg'
import settingsIcon from './assets/images/settings.svg'
import customerSupportIcon from './assets/images/customersupport.svg'
import giftsIcon from './assets/images/gifts.svg'
import logoutIcon from './assets/images/logout.svg'
import arrowRightIcon from './assets/images/arrowright.svg'
import metricLogo from './assets/images/metriclogo.svg'
import marketingChart from './assets/images/marketingchart.svg'
import notificationIcon from './assets/images/notification.svg'
import burgerIconForMobile from './assets/images/burger.svg'
import chevronDownIcon from './assets/images/chevrondown.svg'
import breadCrumbIcon from './assets/images/breadcrumb.svg'
import salesIcon from './assets/images/dashboard/sales.svg'
import cartIcon from './assets/images/dashboard/cart.svg'
import homeIcon from './assets/images/dashboard/home.svg'
import dashboardInventoryIcon from './assets/images/dashboard/inventory.svg'

function App () {
  return (
    <>
      <div className='dashboard'>
        <div className='side-bar'>
          <div className='logo'>
            <div className='group-1'>
              <img className='graph' src={metricLogo} />
            </div>
            <div className='metrix'>Metrix</div>
          </div>
          <div className='menu-items'>
            <div className='active'>
              <div className='iconly-bulk-category'>
                <img className='category' src={dashboardIcon} />
              </div>
              <div className='dashboard-1'>Dashboard</div>
            </div>
            <div className='menu-item'>
              <div className='iconly-light-bag'>
                <img className='bag' src={ordersIcon} />
              </div>
              <div className='orders'>Orders</div>
              <div className='frame-21'>
                <span className='container-1'>3</span>
              </div>
            </div>
            <div className='menu-item-1'>
              <div className='iconly-light-2-user'>
                <img className='user' src={customersIcon} />
              </div>
              <div className='customers'>Customers</div>
            </div>
            <div className='menu-item-2'>
              <div className='iconly-light-folder'>
                <img className='folder' src={inventoryIcon} />
              </div>
              <div className='inventory'>Inventory</div>
            </div>
            <div className='menu-item-3'>
              <div className='iconly-light-chat'>
                <img className='chat' src={conversationIcon} />
              </div>
              <div className='conversations'>Conversations</div>
              <div className='frame-2'>
                <span className='container'>16</span>
              </div>
            </div>
            <div className='menu-item-4'>
              <div className='iconly-light-setting'>
                <img className='setting' src={settingsIcon} />
              </div>
              <div className='settings'>Settings</div>
            </div>
          </div>
          <div className='logout'>
            <img className='fiheadphones' src={customerSupportIcon} />
            <div className='contact-support'>Contact Support</div>
          </div>
          <div className='banner'>
            <div className='frame-7'>
              <img className='figift' src={giftsIcon} />
              <div className='free-gift-awaits-you'>Free Gift Awaits You!</div>
            </div>
            <div className='frame-6'>
              <span className='upgrade-your-account'>Upgrade your account</span>
              <div className='chevron-down fichevron-down-2'>
                <img className='vector-7' src={arrowRightIcon} />
              </div>
            </div>
          </div>
          <div className='bottom-1'>
            <div className='iconly-bulk-logout'>
              <img className='logout-1' src={logoutIcon} />
            </div>
            <div className='logout-2'>Logout</div>
          </div>
        </div>
        <div className='main-container'>
          <div className='top-nav'>
            <div className='top-nav-1'>
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
          <div className='container'>
            {/* <div className='frame-16'> */}
            <div className='dashboard-summary-card sales-card'>
              <div className='summary-heading-1 summary-heading'>
                <div className='icon-2 dashboard-summary--icon'>
                  <img className='graph-1' src={salesIcon} />
                </div>
                <div className='filter filter-1'>
                  <span className='this-week'>This Week</span>
                  <div className='chevron-down fichevron-down-4'>
                    <img className='vector-9' src={chevronDownIcon} />
                  </div>
                </div>
              </div>
              <div className='card-details--wrapper frame-15'>
                <div className='card-details-item frame-13'>
                  <div className='customers-1 text-black-30 header'>Sales</div>
                  <div className='frame-12'>
                    <span className='container-2 header-text-active'>₦4,000,000.00</span>
                  </div>
                </div>
                <div className='card-details-item frame-14'>
                  <div className='active-1 text-black-30 header'>Volume</div>
                  <div className='frame-121 header-text-active--wrapper'>
                    <span className='container-3 header-text-active'>450</span>
                    <div className='container-4 percentage'>+20.00%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='dashboard-summary-card-1  dashboard-summary-card customers-card'>
              <div className='summary-heading-2 summary-heading'>
                <div className='customers-icon dashboard-summary--icon'>
                  <img className='user-1' src={customersIcon} />
                </div>
                <div className='filter filter-2'>
                  <span className='this-week this-week-1'>This Week</span>
                  <div className='chevron-down fichevron-down-5'>
                    <img className='vector-10' src={chevronDownIcon} />
                  </div>
                </div>
              </div>
              <div className='card-details--wrapper frame-151'>
                <div className='card-details-item frame-131'>
                  <div className='customers-2 text-black-30 header'>
                    Customers
                  </div>
                  <div className='frame-122 header-text-active--wrapper'>
                    <span className='container-5  header-text-active'>
                      1,250
                    </span>
                    <div className='container-6 percentage'>+15.80%</div>
                  </div>
                </div>
                <div className='card-details-item frame-141'>
                  <div className='active-2 text-black-30 header'>Active</div>
                  <div className='frame-123 header-text-active--wrapper'>
                    <span className='container-7 header-text-active'>
                      1,180
                    </span>
                    <div className='container-8 percentage'>85%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='dashboard-summary-card-2  dashboard-summary-card all-orders-card'>
              <div className='summary-heading-3 summary-heading'>
                <div className='icon-4 dashboard-summary--icon'>
                  <img className='bag-1' src={ordersIcon} />
                </div>
                <div className='filter filter-3'>
                  <span className='this-week this-week-2'>This Week</span>
                  <div className='chevron-down fichevron-down-6'>
                    <img className='vector-11' src={chevronDownIcon} />
                  </div>
                </div>
              </div>
              <div className='card-details--wrapper frame-152'>
                <div className='card-details-item frame-132'>
                  <div className='all-orders text-black-30 header'>
                    All Orders
                  </div>
                  <div className='frame-124'>
                    <span className='container-9 header-text-active'>450</span>
                  </div>
                </div>
                <div className='card-details-item frame-142'>
                  <div className='pending text-black-30 header'>Pending</div>
                  <div className='frame-125'>
                    <span className='container-10 header-text-active'>5</span>
                  </div>
                </div>
                <div className='card-details-item frame-153'>
                  <div className='completed text-black-30 header'>
                    Completed
                  </div>
                  <div className='frame-126'>
                    <span className='container-11 header-text-active'>445</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='bar-chart marketing-card dashboard-summary-card'>
              <div className='top-1'>
                <div className='frame-34 summary-heading marketing'>
                  <span className='marketting'>Marketting</span>
                  <div className='filter filter-4'>
                    <span className='this-week this-week-3'>This Week</span>
                    <div className='chevron-down fichevron-down-7'>
                      <img className='vector-12' src={chevronDownIcon} />
                    </div>
                  </div>
                </div>
                <div className='key-container marketing-legend--container'>
                  <div className='key legend--wrapper'>
                    <div className='rectangle-4 indicator acquisition'></div>
                    <span className='acquisition legend-text'>Acquisition</span>
                  </div>
                  <div className='key-1 legend--wrapper'>
                    <div className='rectangle-41 indicator purchase'></div>
                    <span className='purchase legend-text'>Purchase</span>
                  </div>
                  <div className='key-2 legend--wrapper'>
                    <div className='rectangle-42 indicator retention'></div>
                    <span className='retention legend-text'>Retention</span>
                  </div>
                </div>
              </div>
              <img className='group-2 marketing-chart' src={marketingChart} />
            </div>
            <div className='dashboard-summary-card-3 dashboard-summary-card products-card'>
              <div className='summary-heading-4 summary-heading'>
                <div className='icon-5 dashboard-summary--icon'>
                  <img className='folder-1' src={dashboardInventoryIcon} />
                </div>
              </div>
              <div className='card-details--wrapper frame-154'>
                <div className='card-details-item frame-133'>
                  <div className='customers-3 text-black-30 header all-products'>
                    All Products
                  </div>
                  <div className='frame-127'>
                    <span className='container-12 header-text-active all-products'>45</span>
                  </div>
                </div>
                <div className='card-details-item frame-143'>
                  <div className='active-3 text-black-30 header all-products'>Active</div>
                  <div className='frame-128 header-text-active--wrapper'>
                    <span className='container-13 header-text-active all-products'>
                      32
                    </span>
                    <div className='container-14 percentage all-products'>+24%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='dashboard-summary-card-4 abandoned-cart-card dashboard-summary-card'>
              <div className='summary-heading-5 summary-heading'>
                <div className='icon-6 dashboard-summary--icon'>
                  <img className='fishopping-cart' src={cartIcon} />
                </div>
                <div className='filter filter-5'>
                  <span className='this-week this-week-4'>This Week</span>
                  <div className='chevron-down fichevron-down-8'>
                    <img className='vector-16' src={chevronDownIcon} />
                  </div>
                </div>
              </div>
              <div className='card-details--wrapper frame-155'>
                <div className='card-details-item frame-134'>
                  <div className='customers-4 text-red header'>
                    Abandoned Cart
                  </div>
                  <div className='frame-129 header-text-active--wrapper'>
                    <span className='container-15 header-text-active'>
                      20%
                    </span>
                    <div className='container-16 percentage'>+0.00%</div>
                  </div>
                </div>
                <div className='card-details-item frame-144'>
                  <div className='active-4 text-black-30 header'>Customers</div>
                  <div className='frame-1210'>
                    <span className='container-17'>30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ORDERS */}
            <div className='order-summary dashboard-summary-card'>
              <div className='recent-orders'>Recent Orders</div>
              <div className='frame-30'>
                <div className='order-card'>
                  <div className='rectangle-3 phone__img gold'></div>
                  <div className='content order-content'>
                    <div className='top-2 order-title'>
                      <span className='iphone-13 order-name'>iPhone 13</span>
                      {/* <div className='right-1'> */}
                        <span className='sept-2022 order-date'>12 Sept 2022</span>
                      {/* </div> */}
                    </div>
                    <div className='bottom-2 order-details'>
                      {/* <div className='frame-24'> */}
                        <span className='x-1 order-price'>₦730,000.00 x 1</span>
                      {/* </div>
                      <div className='frame-25'> */}
                        <span className='pending-1 order-status pending'>Pending</span>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className='frame-23 order-card'>
                  <div className='rectangle-31 phone__img black'></div>
                  <div className='content-1 order-content'>
                    <div className='top-3 order-title'>
                      <span className='iphone-131 order-name'>iPhone 13</span>
                      {/* <div className='right-2'> */}
                        <span className='sept-20221 order-date'>12 Sept 2022</span>
                      {/* </div> */}
                    </div>
                    <div className='bottom-3 order-details'>
                      {/* <div className='frame-241'> */}
                        <span className='x-11 order-price'>₦730,000.00 x 1</span>
                      {/* </div> */}
                      {/* <div className='frame-251'> */}
                        <span className='pending-2 order-status completed'>Completed</span>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className='frame-242 order-card'>
                  <div className='rectangle-32 phone__img gold'></div>
                  <div className='content-2 order-content'>
                    <div className='top-4 order-title'>
                      <span className='iphone-132 order-name'>iPhone 13</span>
                      {/* <div className='right-3'> */}
                        <span className='sept-20222 order-date'>12 Sept 2022</span>
                      {/* </div> */}
                    </div>
                    <div className='bottom-4 order-details'>
                      {/* <div className='frame-243'> */}
                        <span className='x-12 order-price'>₦730,000.00 x 1</span>
                      {/* </div> */}
                      {/* <div className='frame-252'> */}
                        <span className='pending-3 order-status pending'>Pending</span>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className='frame-253 order-card'>
                  <div className='rectangle-33 phone__img black'></div>
                  <div className='content-3 order-content'>
                    <div className='top-5 order-title'>
                      <span className='iphone-133 order-name'>iPhone 13</span>
                      {/* <div className='right-4'> */}
                        <span className='sept-20223 order-date'>12 Sept 2022</span>
                      {/* </div> */}
                    </div>
                    <div className='bottom-5 order-details'>
                      {/* <div className='frame-244'> */}
                        <span className='x-13 order-price'>₦730,000.00 x 1</span>
                      {/* </div> */}
                      {/* <div className='frame-254'> */}
                        <span className='pending-4 order-status completed'>Completed</span>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className='frame-26 order-card'>
                  <div className='rectangle-34 phone__img black'></div>
                  <div className='content-4 order-content'>
                    <div className='top-6 order-title'>
                      <span className='iphone-134 order-name'>iPhone 13</span>
                      {/* <div className='right-5'> */}
                        <span className='sept-20224 order-date'>12 Sept 2022</span>
                      {/* </div> */}
                    </div>
                    <div className='bottom-6 order-details'>
                      {/* <div className='frame-245'> */}
                        <span className='x-14 order-price'>₦730,000.00 x 1</span>
                      {/* </div> */}
                      {/* <div className='frame-255'> */}
                        <span className='pending-5 order-status completed'>Completed</span>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className='frame-27 order-card'>
                  <div className='rectangle-35 phone__img black'></div>
                  <div className='content-5 order-content'>
                    <div className='top-7 order-title'>
                      <span className='iphone-135 order-name'>iPhone 13</span>
                      {/* <div className='right-6'> */}
                        <span className='sept-20225 order-date'>12 Sept 2022</span>
                      {/* </div> */}
                    </div>
                    <div className='bottom-7 order-details'>
                      {/* <div className='frame-246'> */}
                        <span className='x-15 order-price'>₦730,000.00 x 1</span>
                      {/* </div> */}
                      {/* <div className='frame-256'> */}
                        <span className='pending-6 order-status completed'>Completed</span>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className='frame-28 order-card'>
                  <div className='rectangle-36 phone__img gold'></div>
                  <div className='content-6 order-content'>
                    <div className='top-8 order-title'>
                      <div className='iphone-136 order-name'>iPhone 13</div>
                      {/* <div className='right-7'> */}
                        <div className='sept-20226 order-date'>12 Sept 2022</div>
                      {/* </div> */}
                    </div>
                    <div className='bottom-8 order-details'>
                      {/* <div className='frame-247'> */}
                        <div className='x-16 order-price'>₦730,000.00 x 1</div>
                      {/* </div> */}
                      {/* <div className='frame-257'> */}
                        <div className='pending-7 order-status pending'>Pending</div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className='frame-29 order-card'>
                  <div className='rectangle-37 phone__img gold'></div>
                  <div className='content-7 order-content'>
                    <div className='top-9 order-title'>
                      <div className='iphone-137 order-name'>iPhone 13</div>
                      {/* <div className='right-8'> */}
                        <div className='sept-20227 order-date'>12 Sept 2022</div>
                      {/* </div> */}
                    </div>
                    <div className='bottom-9 order-details'>
                      {/* <div className='frame-248'> */}
                        <div className='x-17 order-price'>₦730,000.00 x 1</div>
                      {/* </div> */}
                      {/* <div className='frame-258'> */}
                        <div className='pending-8 order-status pending'>Pending</div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className='frame-301 order-card'>
                  <div className='rectangle-38 phone__img gold'></div>
                  <div className='content-8 order-content'>
                    <div className='top-10 order-title'>
                      <span className='iphone-138 order-name'>iPhone 13</span>
                      {/* <div className='right-9'> */}
                        <span className='sept-20228 order-date'>12 Sept 2022</span>
                      {/* </div> */}
                    </div>
                    <div className='bottom-10 order-details'>
                      {/* <div className='frame-249'> */}
                        <span className='x-18 order-price'>₦730,000.00 x 1</span>
                      {/* </div> */}
                      {/* <div className='frame-259'> */}
                        <span className='pending-9 order-status pending'>Pending</span>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
            {/* <div className='main-content'> */}
            {/* <div className='left'> */}
            {/* <div className='top'> */}

            {/* <div className='right'> */}

            {/* </div> */}
            {/* </div> */}
            <div className='bottom sales-graph-chart dashboard-summary-card'>
              <div className='summary-heading'>
                <div className='frame-20'>
                  <div className='summary'>Summary</div>
                  <div className='icon'>
                    <span className='sales'>Sales</span>
                    <div className='chevron-down fichevron-down'>
                      <img className='vector-17' src={chevronDownIcon} />
                    </div>
                  </div>
                </div>
                <div className='filter'>
                  <span className='last-7-days'>Last 7 Days</span>
                  <div className='chevron-down fichevron-down-1'>
                    <img className='vector-18' src={chevronDownIcon} />
                  </div>
                </div>
              </div>
              <div className='graph-bar'>
                <div className='xaxis'>
                  <div className='k'>100k</div>
                  <div className='k-1'>80k</div>
                  <div className='k-2'>60k</div>
                  <div className='k-3'>40k</div>
                  <span className='k-4'>20k</span>
                </div>
                <div className='bar'>
                  <div className='bar-1'>
                    <div className='rectangle-2'></div>
                  </div>
                  <span className='sept-10'>Sept 10</span>
                </div>
                <div className='bar-2'>
                  <div className='bar-3'>
                    <div className='rectangle-21'></div>
                  </div>
                  <span className='sept-11'>Sept 11</span>
                </div>
                <div className='bar-4'>
                  <div className='bar-5'>
                    <div className='rectangle-22'></div>
                  </div>
                  <span className='sept-12'>Sept 12</span>
                </div>
                <div className='bar-6'>
                  <div className='bar-7'>
                    <div className='rectangle-23'></div>
                  </div>
                  <span className='sept-13'>Sept 13</span>
                </div>
                <div className='bar-8'>
                  <div className='bar-9'>
                    <div className='rectangle-24'></div>
                  </div>
                  <span className='sept-14'>Sept 14</span>
                </div>
                <div className='bar-10'>
                  <div className='bar-11'>
                    <div className='rectangle-25'></div>
                  </div>
                  <span className='sept-15'>Sept 15</span>
                </div>
                <div className='bar-12'>
                  <div className='bar-13'>
                    <div className='rectangle-26'></div>
                  </div>
                  <span className='sept-16'>Sept 16</span>
                </div>
              </div>
            </div>
            {/* </div> */}

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
