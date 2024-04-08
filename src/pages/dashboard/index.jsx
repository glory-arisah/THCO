import './index.scss'
import salesIcon from '@/assets/images/dashboard/sales.svg'
import chevronDownIcon from '@/assets/images/chevrondown.svg'
import customersIcon from '@/assets/images/customers.svg'
import ordersIcon from '@/assets/images/orders.svg'
import marketingChart from '@/assets/images/marketingchart.svg'
import dashboardInventoryIcon from '@/assets/images/dashboard/inventory.svg'
import cartIcon from '@/assets/images/dashboard/cart.svg'
import blueChevronDownIcon from '@/assets/images/dashboard/chevron.svg'
import blackChevronDownIcon from '@/assets/images/dashboard/blackchevron.svg'

export default function Dashboard () {
  return (
    <>
      <div className='dashboard'>
        {/* <div className='main-container'> */}
        <div className='container'>
          {/* <div className='frame-16'> */}
          <div className='dashboard-summary-card sales-card'>
            <div className='summary-heading-1 summary-heading'>
              <div className='sales-icon dashboard-summary--icon'>
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
                <div className='customers-1 header'>Sales</div>
                <div className='frame-12'>
                  <span className='container-2 header-text-active'>
                    ₦4,000,000.00
                  </span>
                </div>
              </div>
              <div className='card-details-item frame-14'>
                <div className='active-1 header'>Volume</div>
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
                <div className='customers-2 header'>Customers</div>
                <div className='frame-122 header-text-active--wrapper'>
                  <span className='container-5  header-text-active'>1,250</span>
                  <div className='container-6 percentage'>+15.80%</div>
                </div>
              </div>
              <div className='card-details-item frame-141'>
                <div className='active-2 header'>Active</div>
                <div className='frame-123 header-text-active--wrapper'>
                  <span className='container-7 header-text-active'>1,180</span>
                  <div className='container-8 percentage'>85%</div>
                </div>
              </div>
            </div>
          </div>
          <div className='dashboard-summary-card-2  dashboard-summary-card all-orders-card'>
            <div className='summary-heading-3 summary-heading'>
              <div className='all-orders-icon dashboard-summary--icon'>
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
                <div className='all-orders header'>All Orders</div>
                <div className='frame-124'>
                  <span className='container-9 header-text-active'>450</span>
                </div>
              </div>
              <div className='card-details-item frame-142'>
                <div className='pending header'>Pending</div>
                <div className='frame-125'>
                  <span className='container-10 header-text-active'>5</span>
                </div>
              </div>
              <div className='card-details-item frame-153'>
                <div className='completed header'>Completed</div>
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
              <div className='inventory-card-icon dashboard-summary--icon'>
                <img className='folder-1' src={dashboardInventoryIcon} />
              </div>
            </div>
            <div className='card-details--wrapper frame-154'>
              <div className='card-details-item frame-133'>
                <div className='customers-3 header all-products'>
                  All Products
                </div>
                <div className='frame-127'>
                  <span className='container-12 header-text-active all-products'>
                    45
                  </span>
                </div>
              </div>
              <div className='card-details-item frame-143'>
                <div className='active-3 header all-products'>Active</div>
                <div className='frame-128 header-text-active--wrapper'>
                  <span className='container-13 header-text-active all-products'>
                    32
                  </span>
                  <div className='container-14 percentage all-products'>
                    +24%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='dashboard-summary-card-4 abandoned-cart-card dashboard-summary-card'>
            <div className='summary-heading-5 summary-heading'>
              <div className='cart-icon dashboard-summary--icon'>
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
                  <span className='container-15 header-text-active'>20%</span>
                  <div className='container-16 percentage'>+0.00%</div>
                </div>
              </div>
              <div className='card-details-item frame-144'>
                <div className='active-4 header'>Customers</div>
                <div className='frame-1210'>
                  <span className='container-17 header-text-active'>30</span>
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
                    <span className='pending-1 order-status pending'>
                      Pending
                    </span>
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
                    <span className='pending-2 order-status completed'>
                      Completed
                    </span>
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
                    <span className='pending-3 order-status pending'>
                      Pending
                    </span>
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
                    <span className='pending-4 order-status completed'>
                      Completed
                    </span>
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
                    <span className='pending-5 order-status completed'>
                      Completed
                    </span>
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
                    <span className='pending-6 order-status completed'>
                      Completed
                    </span>
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
                    <div className='pending-7 order-status pending'>
                      Pending
                    </div>
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
                    <div className='pending-8 order-status pending'>
                      Pending
                    </div>
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
                    <span className='pending-9 order-status pending'>
                      Pending
                    </span>
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
            <div className='summary-heading sales-graph'>
              <div className='frame-20 summary-of-sales'>
                <div className='summary'>Summary</div>
                <div className='icon sales-dropdown--container'>
                  <span className='sales'>Sales</span>
                  <div className='chevron-down fichevron-down'>
                    <img
                      className='blue-chevron-down-icon'
                      src={blueChevronDownIcon}
                      style={{ stroke: '#5570f1' }}
                    />
                  </div>
                </div>
              </div>
              <div className='filter'>
                <span className='last-7-days'>Last 7 Days</span>
                <div className='chevron-down fichevron-down-1'>
                  <img className='vector-18' src={blackChevronDownIcon} />
                </div>
              </div>
            </div>
            <div className='graph-bar sales-bar-chart'>
              <div className='xaxis y-axis'>
                <div className='k y-axis-item'>100k</div>
                <div className='k-1 y-axis-item'>80k</div>
                <div className='k-2 y-axis-item'>60k</div>
                <div className='k-3 y-axis-item'>40k</div>
                <span className='k-4 y-axis-item'>20k</span>
              </div>
              <div className='bar bar--wrapper'>
                <div className='bar-1 bar'>
                  <div className='rectangle-2 blue-bar blue-bar-1'></div>
                </div>
                <span className='sept-10 bar-chart-label'>Sept 10</span>
              </div>
              <div className='bar-2 bar--wrapper'>
                <div className='bar-3 bar'>
                  <div className='rectangle-21 blue-bar blue-bar-2'></div>
                </div>
                <span className='sept-11 bar-chart-label'>Sept 11</span>
              </div>
              <div className='bar-4 bar--wrapper'>
                <div className='bar-5 bar'>
                  <div className='rectangle-22 blue-bar blue-bar-3'></div>
                </div>
                <span className='sept-12 bar-chart-label'>Sept 12</span>
              </div>
              <div className='bar-6 bar--wrapper'>
                <div className='bar-7 bar'>
                  <div className='rectangle-23 blue-bar blue-bar-4'></div>
                </div>
                <span className='sept-13 bar-chart-label'>Sept 13</span>
              </div>
              <div className='bar-8 bar--wrapper'>
                <div className='bar-9 bar'>
                  <div className='rectangle-24 blue-bar blue-bar-5'></div>
                </div>
                <span className='sept-14 bar-chart-label'>Sept 14</span>
              </div>
              <div className='bar-10 bar--wrapper'>
                <div className='bar-11 bar'>
                  <div className='rectangle-25 blue-bar blue-bar-6'></div>
                </div>
                <span className='sept-15 bar-chart-label'>Sept 15</span>
              </div>
              <div className='bar-12 bar--wrapper'>
                <div className='bar-13 bar'>
                  <div className='rectangle-26 blue-bar blue-bar-7'></div>
                </div>
                <span className='sept-16 bar-chart-label'>Sept 16</span>
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
    </>
  )
}
