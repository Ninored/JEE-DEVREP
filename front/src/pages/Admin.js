import React from 'react'

import { useAppContext } from '../context'
import { Route, Switch, withRouter } from 'react-router-dom'


import ResponsiveContainer from '../container/ResponsiveContainer'
import ConferenceList from './admin/ConferenceList'
import ConferenceInfo from './admin/ConferenceInfo'

const Admin = ({ location }) => {
  const [ ctx, ] = useAppContext()
  console.log(ctx)
  return (
    <ResponsiveContainer style={{ height: '100%'}}>
      <Switch>
        <Route path='/admin/conferences/:id' component={ConferenceInfo} />
        <Route path='/admin' component={ConferenceList} />
      </Switch>
    </ResponsiveContainer>

  )
}

export default withRouter(Admin)
