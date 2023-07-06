import React from 'react'
import './Footer.scss'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{ fontSize: '14px' }}
      className='p-2 text-center fw-bold fixed-bottom'>
      &copy; {year} UTE English Club. All rights reserved.
    </footer>
  )
}

export default Footer
