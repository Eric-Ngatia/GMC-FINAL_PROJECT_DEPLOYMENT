import React from 'react';
import { Link } from 'react-router-dom';
import  './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import QuestionCard from './Piece/QuestionCard';
import { useSelector } from 'react-redux';


function Home() {

    let addQuestion = useSelector (state => state.addQuestion)

    return (
        <div>
            <nav class="navbar navbar-white bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand">Dev Forum</a>
                    <ul class='d-flex '>
                        <li></li>
                        <li>
                            <Link to='/SignUp'> </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class='d-flex flex-column justify-content-center align-items-center font-weight-bold'style={{heigth:"500px", backgroundColor:"#0069ff", color:"white", fontWeight:"bold"}}>
                <h1 >Question</h1>
                <p class='mx-3' style={{textAlign:"center", lineHeight:"1.5rem"}}> Ce forum est ouvert à toutes les questions liées à la programmation. <br/>
                    (PHP, Javascript, Java, C++, Ruby, Firebase, C, React, Dart, Julia...)
                </p>
                <input type="text" placeholder='Rechercher des questions' class="form-control form-control-lg container mb-5 mt-2" />
            </div>


            <div class="container">

                <div class="row mt-5 d-flex" style={{border:"2px solid red"}}>
                    <div class='col-lg-3 col-md-12 display-column'>
                        <ul class='list-group' style={{textDecoration:'none'}}>
                            <li class="list-group-item d-flex justify-content-between align-items-center category__item">
                                <a style={{textDecoration:'none'}} href="#">React</a>
                                <span class="badge bg-primary">0</span>
                            </li>

                            <li class="list-group-item d-flex justify-content-between align-items-center category__item">
                                <a style={{textDecoration:'none'}} href="#">PHP</a>
                                <span class="badge bg-primary">0</span>
                            </li>

                            <li class="list-group-item d-flex justify-content-between align-items-center category__item">
                                <a style={{textDecoration:'none',}} href="#">MongoDB</a>
                                <span class="badge bg-primary">0</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center category__item">
                                <a style={{textDecoration:'none'}} href="#">NoSql</a>
                                <span class="badge bg-primary" >0</span>
                            </li>
                        </ul>
                    </div>

                    <div class='col-lg-9 col-md-12'>
                        <div class='d-flex justify-content-between align-item-center'>
                            <p> <span> 0 </span> Questions</p>
                            <button class='btn btn-primary '>
                                <Link style={{textDecoration:"none", color:'white'}} to="/AddQuestion">Poser une question <FontAwesomeIcon icon={faArrowRightLong} /> </Link>
                            </button>
                        </div>
                        
                        <QuestionCard />
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Home;