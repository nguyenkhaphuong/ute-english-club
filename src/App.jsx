import './App.scss'
import React from 'react'

//import components
import Topbar from './components/topbar/Topbar'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

//import main pages
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

//import vocabulary pages
import Vocabulary from './pages/Vocabulary'

//import grammar pages
import Grammar from './pages/Grammar'
import IrregularVerbs from './pages/IrregularVerbs'

//import quiz pages
import VocabQuiz from './pages/Quiz/VocabQuiz'
import GrammarQuiz from './pages/Quiz/GrammarQuiz'
import GrammarTopic from './pages/GrammarTopic'
import VocabularyTopic from './pages/VocabularyTopic'

function App() {
  return (
    <div className='App'>
      <Topbar />
      <div className='sections'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='vocabulary'>
            <Route index={true} element={<Vocabulary />} />
            <Route path=':name' element={<VocabularyTopic />} />
          </Route>
          <Route path='grammar'>
            <Route index={true} element={<Grammar />} />
            <Route path=':name' element={<GrammarTopic />} />
          </Route>
          <Route path='quiz'>
            <Route index={true} element={<Quiz />} />
            <Route path='vocabulary' element={<VocabQuiz />} />
            <Route path='grammar' element={<GrammarQuiz />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='irregularverbs' element={<IrregularVerbs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
