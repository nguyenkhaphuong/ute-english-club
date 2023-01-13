import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Howl } from 'howler'

import { Button, Table } from 'react-bootstrap'

import { vocabCollection } from '../../firebase'
import { onSnapshot, orderBy, query } from 'firebase/firestore'

import { useParams } from 'react-router-dom'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'

export default function VocabularyTopic() {
  const { title } = useParams()
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

  const vocabTopic = vocabulary.filter((doc) => doc.title === title)

  const SoundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    })
    sound.play()
  }
  return (
    <>
      {vocabTopic &&
        vocabTopic.map((vocab) => (
          <>
            <div
              className='p-4'
              style={{
                backgroundColor: '#dbdbec',
              }}>
              <h1 className='container-sm display-5 fw-bold'>{vocab.title}</h1>
              <p className='container-sm'>{vocab.description}</p>
            </div>
            <Helmet>
              <title>{vocab.title} | UTE English Club</title>
            </Helmet>
          </>
        ))}
      <div className='section my-3 px-4'>
        <ScrollToTop />
        <div className='container-sm'>
          {vocabTopic &&
            vocabTopic.map((vocab) => (
              <>
                <Table striped bordered hover responsive='sm'>
                  <thead
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                      color: 'white',
                    }}>
                    <tr>
                      <th>Words</th>
                      <th></th>
                      <th>Images</th>
                      <th>Phonetics</th>
                      <th>Vietnamese Translation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vocab.words &&
                      vocab.words?.map((word) => {
                        return (
                          <tr key={word.id}>
                            <td>{word.word}</td>
                            <td className='text-center'>
                              <Button
                                className='rounded-1'
                                style={{
                                  background:
                                    'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                                }}
                                onClick={() => SoundPlay(word.audio)}>
                                <span className='fa fa-volume-up'></span>
                              </Button>
                            </td>
                            <td>
                              <img
                                className='mx-auto d-block'
                                src={word.image}
                                style={{
                                  width: '2.5em',
                                  maxWidth: '8em',
                                }}
                                alt='Transport'
                              />
                            </td>
                            <td>{word.phonetic}</td>
                            <td>{word.translation}</td>
                          </tr>
                        )
                      })}
                  </tbody>
                </Table>
              </>
            ))}
        </div>
      </div>
    </>
  )
}
