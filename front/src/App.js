import React from 'react'
import{
  Route,
  BrowserRouter,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom'

import { useAppContext } from './context'

import Home from './pages/Home'
import Conference from './pages/Conference'
import Payment from './pages/Payment'
import SubscriptionRegistered from './pages/SubscriptionRegistered'
import Login from './pages/Login'
import Admin from './pages/Admin'

const CheckedRoute = withRouter(({ condition, redirect, location, ...props}) => condition(location) ? <Route {...props } /> : <Redirect to={redirect} />
)
const App = (props) => { 
  const [ ctx , ] = useAppContext()
  return (
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
        <CheckedRoute
          condition={() => ctx.authenticated }
          extact
          redirect='/login'
          path='/admin'
          component={Admin}
        />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
)}

export default App;
