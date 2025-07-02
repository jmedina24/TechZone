import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import Header from '../components/Header2';

const ForgotPassword = () => {
  const [ email, setEmail ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recover password to: ', email);
    //Recover code
  }
  return (
    <>
    <Header />
    <Container className='p-4' style={{maxWidth: '400px'}}>
      <h4 className='mb-4'>Recuperar contraseña</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formEmail'>
          <Form.Label>Ingrese su E-Mail</Form.Label>
          <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
        </Form.Group>
        <Button type='submit' variant='primary' className='mt-3 w-100'>Enviar enlace</Button>
      </Form>
    </Container>
    </>
  )
}

export default ForgotPassword