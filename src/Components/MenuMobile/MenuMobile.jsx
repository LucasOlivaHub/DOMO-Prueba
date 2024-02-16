import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { UserLogin } from '../UserLogin/UserLogin';
import { NavLinks } from '../NavLinks/NavLinks';


export default function MenuMobile({navLinks}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 menu-btn">
        <i className="bi bi-list"></i>
      </Button>

      <Offcanvas show={show} className="menu-mobile" style={{width: "300px", height: "100vh"}} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='nav-mobile'>
              <NavLinks handleShow={handleClose}/>
             
             <UserLogin/>
          </div>
         
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
