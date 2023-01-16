import React, { useState, useEffect } from 'react'

import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

import { vocabCollection } from '../../firebase'
import { onSnapshot, orderBy, query } from 'firebase/firestore'

import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import { Helmet } from 'react-helmet-async'

function Vocabulary() {
  const [vocabulary, setVocabulary] = useState([])
  const queryRef = query(vocabCollection, orderBy('id', 'asc'))
  useEffect(() =>
    onSnapshot(queryRef, (snapshot) => {
      setVocabulary(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
      )
    })
  )

  return (
    <>
      <Helmet>
        <title>Vocabulary | UTE English Club</title>
        <meta name='description' content='Learn vocabulary' />
      </Helmet>
      <div
        className='p-4'
        style={{
          backgroundColor: '#dbdbec',
        }}>
        <h1 className='container-sm display-5 fw-bold'>Vocabulary</h1>
        <p className='container-sm'>
          Here are the list of topics that you want to learn
        </p>
      </div>
      <div className='section mt-3 px-4'>
        <ScrollToTop />
        <div className='container-sm'>
          <Row className='mt-1 gy-4'>
            {vocabulary &&
              vocabulary.map((vocab) => {
                return (
                  <Col key={vocab.id} xs={12} sm={6} md={6} lg={4} xl={3}>
                    <Card
                      as={Link}
                      to={`/vocabulary/${vocab.title}`}
                      className='shadow text-center'
                      style={{
                        maxWidth: '100%',
                        textDecoration: 'none',
                        color: 'black',
                      }}>
                      <Card.Img
                        variant='top'
                        className='mx-auto d-block p-2'
                        style={{ width: '50%' }}
                        src={vocab.image}
                      />
                      <Card.Body>
                        <Card.Title className='fw-bold'>
                          {vocab.title}
                        </Card.Title>
                        <Card.Text>{vocab.description}</Card.Text>
                      </Card.Body>
                      <Button
                        as={Link}
                        className='fw-bold'
                        to={`/vocabulary/${vocab.title}`}
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                        }}>
                        Start Learning
                      </Button>
                    </Card>
                  </Col>
                )
              })}
          </Row>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Vocabulary
