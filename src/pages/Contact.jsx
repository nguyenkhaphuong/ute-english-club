import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import ContactForm from '../components/contact/ContactForm'
import { Helmet } from 'react-helmet-async'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | UTE English Club</title>
        <meta
          name='description'
          content='Contact me if you have any question or suggestion to improve this project'
        />
      </Helmet>
      <div className='mt-5 px-4'>
        <ScrollToTop />
        <div className='container-sm'>
          <Row className='g-3'>
            <Col className='text-center my-auto' md={6}>
              <img
                src='https://cdn-icons-png.flaticon.com/512/3188/3188217.png'
                alt='Contact'
                width='40%'
              />
            </Col>
            <Col md={6}>
              <h1 className='display-5 fw-bold'>Contact</h1>
              <p>Feel free to contact me if you have any questions</p>
              <div className='border rounded-2 shadow container-sm p-4'>
                <ContactForm />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Contact
