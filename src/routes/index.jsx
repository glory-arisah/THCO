import { createBrowserRouter } from 'react-router-dom'
// LAYOUT
import Root from '@/layouts/root-layout/root.jsx';

// PAGES
import Dashboard from '@/pages/dashboard'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Dashboard />
        }
      ]
    },
  ])
