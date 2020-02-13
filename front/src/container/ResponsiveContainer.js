import React from 'react'

import DesktopContainer from '../container/DesktopContainer'
import MobileContainer from '../container/MobileContainer'

const ResponsiveContainer = ({ children}) => {
  return(
    <>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </>
  )
}

export default ResponsiveContainer
