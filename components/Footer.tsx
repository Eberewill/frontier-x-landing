import Image from 'next/image'
import React from 'react'
import Logog from '../asset/logo.svg'

const Footer = () => {
  return (
    <div className="bg-x-black">
    <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
        <div className="container mx-auto my-7 flex flex-col  flex-wrap  items-center justify-between">
          <div >
<Image
            src={Logog}
            width='200px'
            height='100px'
            alt='jj'
            />
          </div>
            
            
        </div>
    </footer>
</div>
  )
}

export default Footer
