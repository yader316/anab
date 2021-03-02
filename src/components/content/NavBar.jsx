import React from 'react';
import { 
    Container,
    Navbar, 
    NavbarBrand,
    NavLink,
    Nav,
    NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logoImg from 'assets/img/anabLogoWeb.png';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='light'>
                <Container className='d-flex align-items-end'>
                    <NavbarBrand href='#'>
                        <img 
                            src={`${logoImg}`}
                            className='d-inline-block align-top'
                            alt='logo de anab'
                            width="180" 
                            height="90"
                        />
                    </NavbarBrand>
                    <NavbarToggle 
                        aria-controls='responsive-navbar-nav' 
                        
                    />
                    <NavbarCollapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto '>
                            <NavLink href='#inicio'>
                                Inicio
                            </NavLink>
                            <NavDropdown 
                                title='Servicios' 
                                id='collasible-nav-dropdown'
                            >
                                <NavLink href='#estadistica'>
                                    Estadistica
                                </NavLink>
                                <NavLink href='#publicidad'>
                                    Publicidad
                                </NavLink>
                                <NavLink href='#capacitacion'>
                                    Capacitacion
                                </NavLink>
                            </NavDropdown>
                            <NavDropdown
                                title='Ligas' 
                                id='collasible-nav-dropdown'
                            >
                                <NavLink href='#upro'>
                                    Unid. Proposito
                                </NavLink>
                                <NavLink href='#maxjerez'>
                                    Maximos Jerez
                                </NavLink>
                                <NavLink href='#rodeo'>
                                    Rodeo
                                </NavLink>
                            </NavDropdown>
                            <NavLink href='#contacto'>
                                Contacto
                            </NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </>
   
    )
}

export default NavBar;
