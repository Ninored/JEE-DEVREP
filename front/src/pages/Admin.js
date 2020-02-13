import React from 'react'

import { useAppContext } from '../context'

const Admin = () => {
  const [ ctx, ] = useAppContext()
  console.log(ctx)
  return (
  <h1> Admin area { ctx.username }</h1>
  )
}

export default Admin
