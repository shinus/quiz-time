import { Button, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ErrorMessage from '../../Component/ErrorMessage'
import Categories from '../../Data/Categories'

import './Home.css'

  
const Home = ({name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  let navigate = useNavigate()

 const handleSubmit = () => {
    if(!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false)
      fetchQuestions(category, difficulty);
      navigate('/quiz')
    }
  };

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{ fontSize: 30 }}>It's Quiz Time </span>

        <div className='settings-select'>
          {error && <ErrorMessage>Please Fill all The Fields</ErrorMessage>}
          <TextField style={{ marginBottom: 25 }} label="enter your name" variant='outlined' onChange={(e) => setName(e.target.value)} />
          <TextField select label="select category" variant='outlined' style={{ marginBottom: 30 }} onChange={(e) => setCategory(e.target.value)} value={category} >
            {
              Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))
            }

          </TextField>

          <TextField select label="select Difficulty" variant='outlined' style={{ marginBottom: 30 }} onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <img src='/undraw_quick_chat_re_bit5.svg' className='banner' alt="quizimg" />
    </div>

  );
     
}

export default Home;
