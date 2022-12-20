import React from 'react'
import { useSelector } from 'react-redux';

function QuestionCard() {

    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    
    let addQuestion = useSelector(state => state.addQuestion)
    

    return (
        
        <div className="card no-border p-3 my-3" style={{border:"2px solid green"}}>
            {addQuestion.map( (question) =>
            <div className="question">
                <div className="question__title">
                    <h1 style={{color:"#031b4e"}}> <a href="#"> Titre de la question {addQuestion.contained} </a> </h1>
                </div>
                <div className="question__date"> {currDate}, {currTime} </div>
                <div className="question__description my-2">
                    TEXTE DE LA QUESTION
                </div>
                <div className="d-flex justify-content-between">
                    <div className="question_answers__count" style={{color:"#0d6efd", fontWeight:"bolder"}}>
                        <span> 0 </span> Reponse
                    </div>
                    <div className="question__tags">
                        <a href="#empty"> Catégorie de la question </a>
                    </div>
                </div>
            </div>
            )}
        </div>
        

    )
}

export default QuestionCard