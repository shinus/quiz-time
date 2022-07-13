import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage';
import './Questions.css';

const Questions = ({currQues,
    setcurrQues,
    questions,
    options,
    correct,
    score,
    setScore,
    
    }) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const handleSelect = (i) => {
        if(selected === i && selected === correct) {
            return 'select';
        } else if( selected === i && selected !== correct) {
            return 'wrong';
        } else if(i === correct) {
            return 'select';
        }
    };

    const handleCheck = (i) => {
        setSelected(i);
        if(i === correct) setScore(score + 1);
        setError(false);
    };

    const navigate = useNavigate();

    const handleNext = () => {
        if(currQues > 8 ) {
            navigate('/result');
        } else if(selected) {
            setcurrQues(currQues + 1 );
            setSelected(); 
        } else {
            setError('Please Select an Option First');
        }
    };

    const handleQuit = () => {

    }

  return (
    <div className='question'>
        <h1>Question {currQues + 1}</h1>

        <div className='singleQuestion'>
            <h2>{questions[currQues].question}</h2>

            <div className='options'>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {options &&
                    options.map((i) => <button onClick={() => handleCheck(i)}
                    className={`singleOption ${selected && handleSelect(i)}`}
                    key={i}
                    disabled={selected}>{i}</button>)}
            </div>
            <div className='controls'>
                <Button variant='contained'
                color='secondary'
                size='large'
                style={{ width: 185 }}
                href='/'
                onClick={handleQuit}
                >Quit</Button>
                <Button variant='contained'
                color='primary'
                size='large'
                style={{ width: 185 }}
                onClick={handleNext}>Next Question</Button>
            </div>

        </div>
    </div>
  )
}

export default Questions