import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Section({ name, description, linkTo, image, action }) {
  return (
    <div className='container-sm'>
      <div className='container-sm'>
        <Row
          className='border shadow rounded-2 p-4'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}>
          <Col className='my-auto' sm={6}>
            <h2 className='fw-bold'>{name}</h2>
            <p>{description}</p>
            <Button
              as={Link}
              to={linkTo}
              className='fw-bold'
              style={{
                background:
                  'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
              }}>
              {action}
            </Button>
          </Col>
          <Col className='p-4 text-center' sm={6}>
            <img src={image} alt={name} style={{ width: '8.5rem' }} />
          </Col>
        </Row>
      </div>
    </div>
  )
}
