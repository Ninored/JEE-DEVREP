import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

const CheckedRoute = withRouter(({ condition, redirect, location, ...props}) => condition(location) ? <Route {...props } /> : <Redirect to={redirect} />)


export default CheckedRoute
