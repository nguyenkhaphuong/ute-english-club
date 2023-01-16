import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import ImageSlider from '../components/imageslider/ImageSlider'

import { Link } from 'react-router-dom'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import ContactForm from '../components/contact/ContactForm'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
      <ImageSlider />
      <Helmet>
        <title>Home | UTE English Club</title>
        <meta name='description' content='Welcome to UTE English Club' />
      </Helmet>
      <div className='section px-4'>
        <ScrollToTop />
        <div className='section'>
          <div className='container-sm'>
            <div className='container-sm'>
              <Row
                as={Link}
                to='/vocabulary'
                className='border shadow rounded-2 p-4'
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}>
                <Col className='my-auto' sm={6}>
                  <h2 className='fw-bold'>Vocabulary</h2>
                  <p>Here are the list of topics that you want to learn</p>
                  <Button
                    as={Link}
                    to='/vocabulary'
                    className='fw-bold'
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                    }}>
                    Start Learning
                  </Button>
                </Col>
                <Col className='p-4 text-center' sm={6}>
                  <img
                    src='https://cdn-icons-png.flaticon.com/512/1902/1902654.png'
                    alt='Vocabulary'
                    style={{ width: '8.5rem' }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className='section px-4'>
        <div className='container-sm'>
          <div className='container-sm'>
            <Row
              className='border shadow rounded-2 p-4'
              as={Link}
              to='/grammar'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}>
              <Col className='my-auto' sm={6}>
                <h2 className='fw-bold'>Grammar</h2>
                <p>
                  Here are the basic grammar structures you need to master your
                  English
                </p>
                <Button
                  as={Link}
                  to='/grammar'
                  className='fw-bold'
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                  }}>
                  Start Learning
                </Button>
              </Col>
              <Col className='p-4 text-center' sm={6}>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/6091/6091117.png'
                  alt='Grammar'
                  style={{ width: '8.5rem' }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className='section px-4'>
        <div className='container-sm'>
          <div className='container-sm'>
            <Row
              className='border shadow rounded-2 p-4'
              as={Link}
              to='/irregularverbs'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}>
              <Col className='my-auto' sm={6}>
                <h2 className='fw-bold'>Irregular Verbs</h2>
                <p>Here are the common irregular verbs</p>
                <Button
                  as={Link}
                  to='/irregularverbs'
                  className='fw-bold'
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                  }}>
                  Start Learning
                </Button>
              </Col>
              <Col className='p-4 text-center' sm={6}>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/4598/4598485.png'
                  alt='Grammar'
                  style={{ width: '8.5rem' }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className='section px-4'>
        <div className='container-sm'>
          <div className='container-sm'>
            <Row
              className='border shadow rounded-2 p-4'
              as={Link}
              to='/quiz'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}>
              <Col className='my-auto' sm={6}>
                <h2 className='fw-bold'>Quiz</h2>
                <p>Review your lessons with quizzes</p>
                <Button
                  as={Link}
                  to='/quiz'
                  className='fw-bold'
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                  }}>
                  Start Practicing
                </Button>
              </Col>
              <Col className='p-4 text-center' sm={6}>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/3874/3874176.png'
                  alt='Quiz'
                  style={{ width: '8.5rem' }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className='section px-4'>
        <div className='container-sm'>
          <div className='container-sm'>
            <Row
              className='border shadow rounded-2 p-4'
              as={Link}
              to='/about'
              style={{
                textDecoration: 'none',
                color: 'black',
              }}>
              <Col className='my-auto' sm={6}>
                <h2 className='fw-bold'>About</h2>
                <p>About this website</p>
                <Button
                  as={Link}
                  to='/about'
                  className='fw-bold'
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                  }}>
                  Learn More
                </Button>
              </Col>
              <Col className='p-4 text-center' sm={6}>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/2538/2538026.png'
                  alt='About'
                  style={{ width: '8.5rem' }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className='section px-4'>
        <div className='container-sm'>
          <div className='border shadow rounded-2 container-sm p-4'>
            <Row className='g-3 my-3'>
              <Col className='text-center my-auto' md={6}>
                <h2 className='fw-bold'>Contact</h2>
                <p>Contact me if you have any questions</p>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/3188/3188217.png'
                  alt='Contact'
                  style={{ width: '8.5rem' }}
                />
              </Col>
              <Col md={6}>
                <ContactForm />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
