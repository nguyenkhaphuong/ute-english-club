import React, { useState, useEffect } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'

import { grammarCollection } from '../../firebase'
import { onSnapshot, orderBy, query } from 'firebase/firestore'

import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import { Helmet } from 'react-helmet-async'
import { Link, Outlet } from 'react-router-dom'

function Grammar() {
  const [grammar, setGrammar] = useState([])
  const queryRef = query(grammarCollection, orderBy('id', 'asc'))
  useEffect(() =>
    onSnapshot(queryRef, (snapshot) => {
      setGrammar(
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
        <title>Grammar | UTE English Club</title>
        <meta name='description' content='Learn grammar' />
      </Helmet>
      <div
        className='p-4'
        style={{
          backgroundColor: '#dbdbec',
        }}>
        <h1 className='container-sm display-5 fw-bold'>Grammar</h1>
        <p className='container-sm'>
          Here are the basic grammar structures you need to master your English
        </p>
      </div>
      <div className='section mt-3 px-4'>
        <ScrollToTop />
        <div className='container-sm'>
          <Row className='mt-1 gy-4'>
            {grammar &&
              grammar.map((grammar) => (
                <Col key={grammar.id} sm={12} md={6} lg={4} xl={3}>
                  <Card
                    className='shadow text-center'
                    as={Link}
                    to={`/vocabulary/${grammar.title}`}
                    style={{
                      maxWidth: '100%',
                      textDecoration: 'none',
                      color: 'black',
                    }}>
                    <Card.Body>
                      <Card.Title className='fw-bold'>
                        {grammar.title}
                      </Card.Title>
                      <Card.Text style={{ height: '8rem' }}>
                        {grammar.description}
                      </Card.Text>
                    </Card.Body>
                    <Button
                      as={Link}
                      className='d-block'
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                      }}
                      to={`/grammar/${grammar.title}`}>
                      <span className='fw-bold'>Start Learning</span>
                    </Button>
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Grammar
