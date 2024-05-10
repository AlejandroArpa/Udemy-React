import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink 
                            className={ ( { isActive } ) => isActive ? 'nav-link active' : 'nav-link'
                            }
                            to='/'
                        >
                            Home
                        </NavLink>  
                        <NavLink 
                            className={ ( { isActive } ) => isActive ? 'nav-link active' : 'nav-link'
                            }
                            to='about'
                        >
                            About
                        </NavLink> 
                        <NavLink 
                            className={ ( { isActive } ) => isActive ? 'nav-link active' : 'nav-link'
                            }
                            to='login'
                        >
                            Login
                        </NavLink> 
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
