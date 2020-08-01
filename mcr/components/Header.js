import React from 'react';
import Link from './NavLink';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


const navbar ={
  background: '#fff',
  width: '100%',
}

const logo = {
  width: '60px',
}

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" style={navbar}>
            <Navbar.Brand href="/" ><img src="" style={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <Link href="/" >Home</Link>
                    <Link href="/recipes" >Recipes</Link>
                    <Link href="/about" >About</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}   