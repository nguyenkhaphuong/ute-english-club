import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import { grammarCollection } from '../../firebase'
import { onSnapshot, orderBy, query } from 'firebase/firestore'

import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import { useParams } from 'react-router-dom'

export default function GrammarTopic() {
  const { title } = useParams()
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

  const grammarTopic = grammar.filter((doc) => doc.title === title)
  return (
    <>
      {grammarTopic &&
        grammarTopic.map((grammar) => (
          <>
            <div
              className='p-4'
              style={{
                backgroundColor: '#dbdbec',
              }}>
              <h1 className='container-sm display-5 fw-bold'>
                {grammar.title}
              </h1>
              <p className='container-sm'>{grammar.description}</p>
            </div>
            <Helmet>
              <title>{grammar.title} | UTE English Club</title>
            </Helmet>
          </>
        ))}
      <div className='section my-3 px-4'>
        <ScrollToTop />
        <div>
          {grammarTopic &&
            grammarTopic.map((grammar) => (
              <>
                <div className='container-sm'>{grammar.description}</div>
                <div className='container-sm mt-4'>
                  <h2 className='fw-bold'>Basic Form</h2>
                  The basic form of {grammar.title}:
                  <div
                    style={{ backgroundColor: '#dbdbec' }}
                    className='my-3 text-center p-3 rounded border border-secondary h3 fw-bold'>
                    {grammar.basicForm}
                  </div>
                  <strong>For example:</strong> <i>{grammar.basicExample}</i>
                </div>
                <div className='container-sm mt-4'>
                  <h2 className='fw-bold'>Negative form</h2>
                  The negative form of {grammar.title}:
                  <div
                    style={{ backgroundColor: '#dbdbec' }}
                    className='my-3 text-center p-3 rounded border border-secondary h3 fw-bold'>
                    {grammar.negativeForm}
                  </div>
                  <strong>For example: </strong>
                  <i>{grammar.negativeExample}</i>
                </div>
                <div className='container-sm mt-4'>
                  <h2 className='fw-bold'>Interrogative Form</h2>
                  The Interrogative form of {grammar.title}:
                  <div
                    style={{ backgroundColor: '#dbdbec' }}
                    className='my-3 text-center p-3 rounded border border-secondary h3 fw-bold'>
                    {grammar.interrogativeForm}
                  </div>
                  <strong>For example: </strong>
                  <i>{grammar.interrogativeExample}</i>
                </div>
                <div className='container-sm mt-4'>
                  <h2 className='fw-bold'>Exercises</h2>
                  {grammar.exercises &&
                    grammar.exercises.map((exercise) => {
                      return (
                        <p key={exercise.id}>
                          {exercise.id}. {exercise.sentence}
                          <strong>{exercise.clue}</strong>
                        </p>
                      )
                    })}
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  )
}
