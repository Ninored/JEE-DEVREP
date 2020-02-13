import React from 'react'

import { useAppContext } from '../context'


import ResponsiveContainer from '../container/ResponsiveContainer'

const Admin = () => {
  const [ ctx, ] = useAppContext()
  console.log(ctx)
  return (
    <ResponsiveContainer style={{ height: '100vh'}}>
      <h1> Admin area { ctx.username }</h1>
    </ResponsiveContainer>

  )
}

export default Admin
