import React from 'react'
import{
  Route,
  BrowserRouter,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'

import Home from './pages/Home'
import Conference from './pages/Conference'
import Payment from './pages/Payment'
import SubscriptionRegistered from './pages/SubscriptionRegistered'

const CheckedRoute = withRouter(({ condition, redirect, location, ...props}) => condition(location) ? <Route {...props } /> : <Redirect to={redirect} />
)
const App = (props) => { return (
  <BrowserRouter>
    <Switch>
      <Route path="/conference/:id" exact component={Conference} />
      <Route path="/payment" exact componenet={Payment} />
      <CheckedRoute 
        condition={(location) => location.state && !location.state.fromSubscription }
        exact
        redirect='/'
        path="/subscription/registered"
        component={SubscriptionRegistered}
      />

      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
)}

export default App;
