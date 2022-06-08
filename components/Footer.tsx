import Image from 'next/image'
import React from 'react'
import Logog from '../asset/logo.svg'

const Footer = () => {
  return (
    <div className="bg-x-black">
    <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
        <div className="container mx-auto flex flex-col flex-wrap items-center justify-between">
            <Image
            src={Logog}
            width='200px'
            height='50px'
            alt='jj'
            />
        </div>
    </footer>
</div>
  )
}

export default Footer