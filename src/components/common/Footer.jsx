import React from "react"
import { social } from "../data/dummydata"



const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item, index) => (
          <>
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
              <i data-aos='zoom-in'>{item.icon}</i>
            </a>
          </>
        ))}
        <p data-aos='zoom-in'>© 2024 Witty Owls Technologies. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Footer
