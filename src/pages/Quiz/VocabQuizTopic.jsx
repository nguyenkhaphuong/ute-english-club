import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

import { Button } from 'react-bootstrap'

import { vocabQuizCollection } from '../../../firebase'
import { onSnapshot, orderBy, query } from 'firebase/firestore'

import { Link, useParams } from 'react-router-dom'
import ScrollToTop from '../../components/scrollToTop/ScrollToTop'

export default function VocabQuizTopic() {
  const { name } = useParams()
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

  const quizTopic = vocabQuiz.filter((doc) => doc.name === name)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const resetQuiz = () => {
    setScore(0)
    setCurrentQuestion(0)
    setShowScore(false)
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizTopic[0].questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }
  return (
    <>
      {quizTopic &&
        quizTopic.map((quiz) => (
          <div key={quiz.id}>
            <Helmet>
              <title>{quiz.name} | Vocabulary Quiz | UTE English Club</title>
              <meta
                name='description'
                content={`Words related to ${quiz.name}`}
              />
            </Helmet>
          </div>
        ))}
      <div className='section px-4'>
        <ScrollToTop />
        <div className='container-sm'>
          {quizTopic &&
            quizTopic.map((quiz) => (
              <div key={quiz.id}>
                <div className='shadow container-sm rounded-2 border p-5'>
                  {showScore ? (
                    <div className='display-5 score-section'>
                      <p>
                        You scored {score} out of {quiz.questions.length}
                      </p>
                      <Button
                        className='rounded-2 shadow-sm p-2 mt-3 me-3 fw-bold'
                        as={Link}
                        to='/quiz/vocabulary'
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                          fontSize: '20px',
                        }}>
                        Go Back
                      </Button>
                      <Button
                        className='rounded-2 shadow-sm p-2 mt-3 me-3 fw-bold'
                        onClick={resetQuiz}
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                          fontSize: '20px',
                        }}>
                        Reset Quiz
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className='question-section'>
                        <div className='fw-bold h3 question-count mb-2'>
                          <span>Question {currentQuestion + 1}</span>/
                          {quiz.questions.length}
                        </div>
                        <div className='h5 question-text mb-2'>
                          {quiz.questions[currentQuestion].questionText}
                          <br />
                          <img
                            className='mx-auto d-block'
                            src={quiz.questions[currentQuestion].image}
                            alt='Info'
                            width={'125px'}
                            style={{ maxWidth: '40%' }}
                          />
                        </div>
                      </div>
                      <div className='answer-section mt-2'>
                        <p className='fw-bold'>Choose your answer:</p>
                        {quiz.questions[currentQuestion].answerOptions.map(
                          (answerOption) => (
                            <Button
                              key={answerOption.id}
                              className='w-100 rounded-2 shadow-sm p-2 mt-2 fw-bold'
                              onClick={() =>
                                handleAnswerOptionClick(answerOption.isCorrect)
                              }
                              style={{
                                background:
                                  'linear-gradient(135deg, rgba(62,64,149,1) 50%, rgba(237,50,55,1) 100%)',
                                fontSize: '20px',
                              }}>
                              {answerOption.answerText}
                            </Button>
                          )
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
