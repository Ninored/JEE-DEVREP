import React from 'react'
import{
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom'

import { useAppContext } from './context'
import CheckedRoute from './tools/CheckedRoute'

import Home from './pages/Home'
import Conference from './pages/Conference'
import Payment from './pages/Payment'
import SubscriptionRegistered from './pages/SubscriptionRegistered'
import Login from './pages/Login'
import Admin from './pages/Admin'

const App = (props) => { 
  const [ ctx , ] = useAppContext()
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/subscription/:id" component={Conference} />
        <Route path="/payment" exact componenet={Payment} />
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />

        <CheckedRoute 
          condition={(location) => location.state && !location.state.fromSubscription }
          exact
          redirect='/'
          path="/subscription/registered"
          component={SubscriptionRegistered}
        />
        <CheckedRoute
          condition={() => ctx.authenticated}
          redirect='/login'
          path='/admin'
          component={Admin}
        />
      </Switch>
    </BrowserRouter>
)}

export default App;
