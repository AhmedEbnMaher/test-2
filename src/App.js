import React, { Suspense } from 'react'

import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// Error Pages
import Page404 from './pages/ErrorPages/page-404'

import { userRoutes} from './routes/allRoutes'

// Import  middleware
import Middleware from './routes/middleware/middleware'

// layouts Format
import Layout from './components/layout/layout'
import './assets/scss/app.scss'

const App = props => {


  return (
    <Suspense fallback="loader">
      <Router>
        <Switch>
          <Route exact path="/myorders/error-not-found">
            <Page404 />
          </Route>
          <Route exact path="/">
            {false ? <Redirect to="/myorders" /> : <Redirect to="/myorders/index" />}
          </Route>

          {userRoutes.map((route, idx) => (
            <Middleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={`${idx * 34567}`}
            />
          ))}

          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  )
}



export default (App)
