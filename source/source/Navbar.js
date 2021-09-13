import React from 'react'
import { NavLink } from 'react-router-dom'
import navImg from './navImg.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><img className="mx-2" src={navImg} alt="..."/>NewsGlass</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link active text-capitalize" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link active text-capitalize" aria-current="page" to="/business">business </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link active text-capitalize" aria-current="page" to="/entertainment">entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link active text-capitalize" aria-current="page" to="/general">general</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link active text-capitalize" aria-current="page" to="/health">health</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link active text-capitalize" aria-current="page" to="/science">science</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link active text-capitalize" aria-current="page" to="/sports">sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="menu_active" className="nav-link active text-capitalize" aria-current="page" to="/technology">technology</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;