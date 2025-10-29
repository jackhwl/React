import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(prev => [...prev, selectedAnswer]);
    }

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
            <QuestionTimer timeout={10000} onTimeout={() => handleSelectAnswer(null)} />
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <ul id="answers">
                {shuffledAnswers.map((answer, index) => (
                    <li key={index} className="answer"><button onClick={() => handleSelectAnswer(answer)}>{answer}</button></li>
                ))}
            </ul>
        </div>
    </div>;
}