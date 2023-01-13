import React, { useState, useEffect } from 'react'
import { Accordion, Button, Card, Row, Col } from 'react-bootstrap'

import { onSnapshot, orderBy, query } from 'firebase/firestore'
import { vocabQuizCollection } from '../../../firebase'

import ScrollToTop from '../../components/scrollToTop/ScrollToTop'
import { Helmet } from 'react-helmet-async'
import { Link, Outlet } from 'react-router-dom'

function VocabQuiz() {
  const [vocabQuiz, setVocabQuiz] = useState([])
  const queryRef = query(vocabQuizCollection, orderBy('id', 'asc'))
  useEffect(() =>
    onSnapshot(queryRef, (snapshot) => {
      setVocabQuiz(
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
        <title>Vocabulary Quiz | UTE English Club</title>
        <meta
          name='description'
          content='Practice your vocabulary with quizzes'
        />
      </Helmet>
      <div
        className='p-4'
        style={{
          backgroundColor: '#dbdbec',
        }}>
        <h1 className='container-sm display-5 fw-bold'>Vocabulary Quiz</h1>
        <p className='container-sm'>Review your vocabulary with quizzes</p>
      </div>
      <div className='section p-4'>
        <ScrollToTop />
        <div className='container-sm'>
          <Row className='g-4'>
            {vocabQuiz &&
              vocabQuiz.map((vocabQuiz) => (
                <Col key={vocabQuiz.id} sm={12} md={6} lg={4} xl={3}>
                  <Card className='shadow text-center'>
                    <Card.Img
                      variant='top'
                      className='mx-auto d-block p-2'
                      style={{ width: '50%' }}
                      src={vocabQuiz.image}
                    />
                    <Card.Body style={{ backgroundColor: '#e1e1e1' }}>
                      <Card.Title className='fw-bold'>
                        {vocabQuiz.name}
                      </Card.Title>
                      <Card.Text>Words related to {vocabQuiz.name}</Card.Text>
                    </Card.Body>
                    <Button
                      as={Link}
                      className='fw-bold'
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                      }}
                      to={`/quiz/vocabulary/${vocabQuiz.name}`}>
                      Start Learning
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

export default VocabQuiz
