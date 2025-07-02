import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const SignUp = ({ show, handleClose, handleRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleRegister(formData);
  };

  return (
    <Modal show={show} onHide={handleClose} centered dialogClassName='modal animated-modal' style={{borderColor: '#0081ea'}}>
      <Modal.Header style={{backgroundColor: '#0081ea'}} closeButton>
        <Modal.Title style={{color: 'white'}}>Crear cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId='formName'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
                type='text'
                name='name'
                value={formData.name}
                onChange={onChange}
                required
            />
          </Form.Group>

          <Form.Group controlId='formEmail' className='mt-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control
                type='email'
                name='email'
                value={formData.email}
                onChange={onChange}
                required
            />
          </Form.Group>

          <Form.Group controlId='formPassword' className='mt-3'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
                type='password'
                name='password'
                value={formData.password}
                onChange={onChange}
                required
            />
          </Form.Group>

          <Button 
                type='submit' 
                className='mt-4 w-100'
                style={{backgroundColor: '#0081ea', borderColor: '#0081ea'}}>Registrarse</Button>
        
          <div className='text-center mt-3'>
            <span 
              style={{cursor: 'pointer', color: '#0081ea', fontSize: '0.9rem'}}
              onClick={() => {
                const modalDialog = document.querySelector('.modal-dialog');
                if (modalDialog) {
                  modalDialog.classList.add('fade-out');
                  setTimeout(() => {
                    handleClose();
                    window.dispatchEvent(new CustomEvent('openLogin'));
                  }, 300);
                } else {
                  handleClose();
                  window.dispatchEvent(new CustomEvent('openLogin'));
                }
              }}
            > 
            ¿Ya tienes cuenta? Inicia sesión
            </span>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default SignUp
