import * as React from 'react'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

const BgLayout: React.FunctionComponent<Props> = ({
  children,

}) => (
  <div className='  
  background-animate
   
    bg-gradient-to-b
    from-bggrad-one
    via-bggrad-two
    to-bggrad-three
    
    
    '
    
  >
    {children}
    <Footer/>
  </div>
)

export default BgLayout
