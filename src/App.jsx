import "./App.scss";
import React from "react";

//import components
import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import main pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound";

//import vocabulary pages
import Vocabulary from "./pages/Vocabulary";
import Greetings from "./pages/Vocabulary/Greetings";
import Transportation from "./pages/Vocabulary/Transportation";
import Computers from "./pages/Vocabulary/Computers";
import Travelling from "./pages/Vocabulary/Travelling";
import Food from "./pages/Vocabulary/Food";
import Music from "./pages/Vocabulary/Music";

//import grammar pages
import Grammar from "./pages/Grammar";
import PresentSimple from "./pages/Grammar/PresentSimple";
import PastSimple from "./pages/Grammar/PastSimple";
import PresentContinous from "./pages/Grammar/PresentContinous";
import PresentPerfect from "./pages/Grammar/PresentPerfect";
import IrregularVerbs from "./pages/Grammar/IrregularVerbs";

//import quiz pages
import VocabQuiz from "./pages/Quiz/VocabQuiz";
import GrammarQuiz from "./pages/Quiz/GrammarQuiz";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="vocabulary">
            <Route index={true} element={<Vocabulary />} />
            <Route path="greetings" element={<Greetings />} />
            <Route path="transportation" element={<Transportation />} />
            <Route path="computers" element={<Computers />} />
            <Route path="travelling" element={<Travelling />} />
            <Route path="food" element={<Food />} />
            <Route path="music" element={<Music />} />
          </Route>
          <Route path="grammar">
            <Route index={true} element={<Grammar />} />
            <Route path="presentsimple" element={<PresentSimple />} />
            <Route path="pastsimple" element={<PastSimple />} />
            <Route path="presentcontinous" element={<PresentContinous />} />
            <Route path="presentperfect" element={<PresentPerfect />} />
            <Route path="irregularverbs" element={<IrregularVerbs />} />
          </Route>
          <Route path="quiz">
            <Route index={true} element={<Quiz />} />
            <Route path="vocabulary" element={<VocabQuiz />} />
            <Route path="grammar" element={<GrammarQuiz />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
