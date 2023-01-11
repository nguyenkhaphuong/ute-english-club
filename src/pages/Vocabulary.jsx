import React, { useState, useEffect } from 'react'

import { Button, Card, Row, Col } from 'react-bootstrap'

import { vocabCollection } from '../../firebase'
import { onSnapshot, orderBy, query } from 'firebase/firestore'

import { TabTitle } from '../utils/GeneralFunctions'

import { Howl } from 'howler'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'

function Vocabulary() {
  TabTitle('Vocabulary | UTE English Club')

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

  const SoundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    })
    sound.play()
  }

  return (
    <>
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
      <div className='section my-3 px-4'>
        <ScrollToTop />
        <div className='container-sm'>
          <Row className='g-4'>
            {vocabulary.map((vocab) => {
              return (
                <Col key={vocab.id} sm={12} md={6} lg={4} xl={3}>
                  <Card className='shadow p-2 text-center'>
                    <Card.Img
                      variant='top'
                      className='mx-auto d-block p-2'
                      style={{ width: '50%' }}
                      src={vocab.image}
                    />
                    <Card.Body>
                      <Card.Title>{vocab.title}</Card.Title>
                      <Card.Text>{vocab.description}</Card.Text>
                      <Button
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                        }}
                        href={`/vocabulary/${vocab.id}`}>
                        <span className='fw-bold'>Start Learning</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>
      </div>
    </>
  )
}

export default Vocabulary
