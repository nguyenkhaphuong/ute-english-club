import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageSlider from '../components/imageslider/ImageSlider'

import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/contact/ContactForm'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import Section from '../components/sections/Section'

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
        <Section
          name='Vocabulary'
          description='Here are the list of topics that you want to learn'
          linkTo='/vocabulary'
          image='https://cdn-icons-png.flaticon.com/512/1902/1902654.png'
          action='Start Learning'
        />
      </div>
      <div className='section px-4'>
        <Section
          name='Grammar'
          description='Here are the basic grammar structures you need to master your English'
          linkTo='/grammar'
          image='https://cdn-icons-png.flaticon.com/512/6091/6091117.png'
          action='Start Learning'
        />
      </div>
      <div className='section px-4'>
        <Section
          name='Irregular Verbs'
          description='Here are the common irregular verbs'
          linkTo='/irregularverbs'
          image='https://cdn-icons-png.flaticon.com/512/4598/4598485.png'
          action='Start Learning'
        />
      </div>
      <div className='section px-4'>
        <Section
          name='Quiz'
          description='Review your lessons with quizzes'
          linkTo='/quiz'
          image='https://cdn-icons-png.flaticon.com/512/3874/3874176.png'
          action='Start Practicing'
        />
      </div>
      <div className='section px-4'>
        <Section
          name='About'
          description='About this website'
          linkTo='/about'
          image='https://cdn-icons-png.flaticon.com/512/2538/2538026.png'
          action='Learn More'
        />
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
