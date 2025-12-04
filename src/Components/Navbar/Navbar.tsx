


import React from 'react'
import './Navbar.css'
import Image from "next/image"; 


import Link from 'next/link';







export default function Navbar() {
  return (

       <div>
    
      <header className="header">
        <div className="logo">
          <img src="/Images/flipslogo.svg"  alt="logo" width="200px" height="85px" style={{ position: "relative", right: "70px" }} />
        </div>
        

        <div
          className="icons"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <Link href="/" style={{ color: "black", textDecoration: "none", fontSize: "large", marginRight: "20px", position: "relative", right: "80px" }}>Home</Link>
          <Link href="/productlist" style={{ color: "black", textDecoration: "none", fontSize: "large", marginRight: "20px", position: "relative", right: "60px" }}>Productlist</Link>
          <Link href="/aboutus" style={{ color: "black", textDecoration: "none", fontSize: "large", marginRight: "20px", position: "relative", right: "40px" }}>Aboutus</Link>
          <Link href="/contactus" style={{ color: "black", textDecoration: "none", fontSize: "large", marginRight: "20px", position: "relative", right: "20px" }}>Contactus</Link>

          <input
          type="text"
          className="searchbar"
          placeholder="SEARCH FOR PRODUCTS, BRANDS AND MORE"
        />


                  <Image src="/Images/login.webp" alt="login" width={30} height={30} />

          <Link href="/login" style={{ color: "black", textDecoration: "none", fontSize: "large", marginRight: "20px", position: "relative", left: "5px" }}>Login</Link>

                  <Image src="/Images/cart.jpg" alt="cart" width={30} height={30} />

          <Link href="/cart" style={{ color: "black", textDecoration: "none", fontSize: "large", marginRight: "20px", position: "relative", left: "5px" }}>Cart</Link>

                  <Image src="/Images/seller.webp" alt="seller" width={30} height={30} />

          <Link href="/seller" style={{ color: "black", textDecoration: "none", fontSize: "large", marginRight: "20px", position: "relative", left: "5px" }}>Become a Seller</Link>

          <img src="/Images/dots.jpg" alt="dot" width="30px" style={{position: "relative", left: "10px"}} />
        </div>
      </header>
    

        
    </div>  
  )
}

