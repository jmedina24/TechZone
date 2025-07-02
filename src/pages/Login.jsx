import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = ({show, handleClose, handleLogin, openRegister}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header style={{backgroundColor: '#0081ea'}} closeButton>
            <Modal.Title style={{color: 'white'}}>Iniciar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId='formPassword' className='mt-3'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>

              <Button variant='primary' type='submit' className='mt-4 w-100'>Ingresar</Button>

              <div className='text-center mt-3'>
                <Link to='/forgotpassword' style={{fontSize: '0.9rem'}}>¿Olvidó su contraseña?</Link>
                <br />
                <span style={{cursor: 'pointer', color: '#0081ea', fontSize: '0.9rem'}} onClick={openRegister}>
                  ¿No tienes cuenta? Crea cuenta
                </span>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
    
  )
}

export default Login;
