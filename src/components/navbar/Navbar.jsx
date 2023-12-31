import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Navbar.scss"
import { useState } from 'react';
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation();
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        }
    },[])
    const currentUser = {
        id: 1,
        username: "Sheikh Yeamin",
        isSeller: true
    }
    return (
        <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                      <span className="text">fiverr</span>
                    </Link>
                 
                  <span className="dot">.</span>
                </div>

                <div className="links">
                  <span>Fiverr Business</span>
                  <span>Explore</span>
                  <span>English</span>
                  <span>Sign In</span>
                  {!currentUser?.isSeller && <span>Become a Seller</span>}
                  {!currentUser && <button>Join</button>}
                  {currentUser && (
                    <div className="user" onClick={() => setOpen(!open)}>
                      <img src="https://media.licdn.com/dms/image/D5603AQExi7Z-5ii5yQ/profile-displayphoto-shrink_800_800/0/1679237885954?e=2147483647&v=beta&t=GMDkjoVE9Zq84uQZNqMG076s_jo_SdErPvn6476lxhQ" alt="" />
                      <span>{currentUser?.username}</span>
                      {open && <div className="options">
                        {
                            currentUser?.isSeller && (
                                <>
                                 <Link className="link" to="/mygigs">Gigs</Link>
                                 <Link className="link" to="/add">Add New Gig</Link>
                                </>
                            )
                        }
                        <Link className="link" to="/orders">Orders</Link>
                        <Link className="link" to="/messages">Messages</Link>
                        <Link className="link" to="">Logout</Link>
                      </div>}
                    </div>
                  )}
                </div>
                
            </div>
           {(active || pathname !=="/") && (
            <>
            <hr />
            <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
            </>
            )}
        </div>
    );
};

export default Navbar;