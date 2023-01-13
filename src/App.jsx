import './App.scss'
import React from 'react'

//import components
import Topbar from './components/topbar/Topbar'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

//import main pages
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

//import vocabulary pages
import Vocabulary from './pages/Vocabulary'
import VocabularyTopic from './pages/VocabularyTopic'

//import grammar pages
import Grammar from './pages/Grammar'
import IrregularVerbs from './pages/IrregularVerbs'
import GrammarTopic from './pages/GrammarTopic'

//import quiz pages
import VocabQuiz from './pages/Quiz/VocabQuiz'
import VocabQuizTopic from './pages/Quiz/VocabQuizTopic'
import GrammarQuiz from './pages/Quiz/GrammarQuiz'
import GrammarQuizTopic from './pages/Quiz/GrammarQuizTopic'

function App() {
  return (
    <div className='App'>
      <HelmetProvider>
        <Topbar />
        <div className='sections'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='vocabulary'>
              <Route index element={<Vocabulary />} />
              <Route path=':title' element={<VocabularyTopic />} />
            </Route>
            <Route path='grammar'>
              <Route index element={<Grammar />} />
              <Route path=':title' element={<GrammarTopic />} />
            </Route>
            <Route path='quiz'>
              <Route index element={<Quiz />} />
              <Route path='vocabulary'>
                <Route index element={<VocabQuiz />} />
                <Route path=':name' element={<VocabQuizTopic />} />
              </Route>
              <Route path='grammar'>
                <Route index element={<GrammarQuiz />} />
                <Route path=':name' element={<GrammarQuizTopic />} />
              </Route>
            </Route>
            <Route path='about' element={<About />} />
            <Route path='irregularverbs' element={<IrregularVerbs />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </HelmetProvider>
    </div>
  )
}

export default App
