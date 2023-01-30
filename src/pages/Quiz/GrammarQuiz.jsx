import React, { useState, useEffect } from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap'

import { onSnapshot, orderBy, query } from 'firebase/firestore'
import { grammarQuizCollection } from '../../../firebase'

import ScrollToTop from '../../components/scrollToTop/ScrollToTop'
import { Helmet } from 'react-helmet-async'
import { Link, Outlet } from 'react-router-dom'

function GrammarQuiz() {
  const [grammarQuiz, setGrammarQuiz] = useState([])
  const queryRef = query(grammarQuizCollection, orderBy('id', 'asc'))
  useEffect(() =>
    onSnapshot(queryRef, (snapshot) => {
      setGrammarQuiz(
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
        <title>Grammar Quiz | UTE English Club</title>
        <meta name='description' content='Practice your grammar with quizzes' />
      </Helmet>
      <div
        className='p-4'
        style={{
          backgroundColor: '#dbdbec',
        }}>
        <h1 className='container-sm display-5 fw-bold'>Grammar Quiz</h1>
        <p className='container-sm'>Review your grammar with quizzes</p>
      </div>
      <div className='section px-4 mt-3'>
        <ScrollToTop />
        <div className='container-sm'>
          <Row className='mt-1 gy-4'>
            {grammarQuiz &&
              grammarQuiz.map((grammarQuiz) => (
                <Col key={grammarQuiz.id} sm={12} md={6} lg={4} xl={3}>
                  <Card
                    className='shadow text-center'
                    style={{
                      maxWidth: '100%',
                      textDecoration: 'none',
                      color: 'black',
                    }}
                    as={Link}
                    to={`/quiz/grammar/${grammarQuiz.link}`}>
                    <Card.Body>
                      <Card.Title className='fw-bold'>
                        {grammarQuiz.name}
                      </Card.Title>
                      <Card.Text style={{ height: '8rem' }}>
                        {grammarQuiz.description}
                      </Card.Text>
                    </Card.Body>
                    <Button
                      as={Link}
                      className='fw-bold'
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                      }}
                      to={`/quiz/grammar/${grammarQuiz.link}`}>
                      Start Quiz
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

export default GrammarQuiz
