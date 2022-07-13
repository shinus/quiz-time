
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);
    setQuestions(data.results)
    
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }} >
        <Header />

        <Routes>

          <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} >

          </Route>
          <Route path='/quiz' exact element={<Quiz name={name} score={score} questions={questions} setScore={setScore} setQuestions={setQuestions}/>}>
            

          </Route>
          <Route path='/result' exact element={<Result name={name} score={score} />}>

          </Route>


        </Routes>


      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
