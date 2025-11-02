import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length-1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswers(prev => [...prev, selectedAnswer]);

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }
            setTimeout(() => {
                setAnswerState('');
            }, 2000);
        }, 1000);
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null);
    }, [handleSelectAnswer]);

    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>You've completed the quiz!</h2>
            <p>Your score: {userAnswers.filter((answer, index) => answer === QUESTIONS[index].correctAnswer).length} / {QUESTIONS.length}</p>
        </div>;
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    return <div id="quiz">
        <div id="question">
            <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map((answer, index) => {
                    const isSelected = userAnswers[userAnswers.length - 1] === answer;
                    let cssClasses = '';
                    if (answerState === 'answered' && isSelected) {
                        cssClasses = 'selected';
                    }
                    if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClasses = answerState;
                    }
                    return (
                        <li key={index} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)} className={answerState === 'correct' ? 'correct' : 'wrong'}>{cssClasses}</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>;
}