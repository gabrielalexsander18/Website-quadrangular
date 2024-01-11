import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import paths from '../constants/paths'
import { Home } from '../containers'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const MyRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={paths.Home} element={<Home />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
