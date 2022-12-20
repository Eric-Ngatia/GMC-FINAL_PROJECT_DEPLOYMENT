import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import { useSelector } from 'react-redux';

function AddQuestion() {

    const [value, setValue] = useState ('')

    const handleChange = val => {
        setValue(val)
    }

    let addQuestion = useSelector (state => state.addQuestion)

    const [title, setTitle ] = useState('');
    const [contained, setContained] = useState('');
    const [technologies, setTechnologies] = useState('');

    const options = [
        { label: 'React', value:'React'},
        { label: 'PHP', value:'PHP'},
        { label: 'MongoDB', value:'MongoDB'},
        { label: 'NoSql', value:'NoSql'},
    ]

    return (
        <div className="container my-5">
            <div class="col-md-12 col-lg-8 mx-auto ">
                <div class='d-flex justify-content-end mx-auto'>
                    <Link to="/Home"> Retour <FontAwesomeIcon icon={faArrowLeftLong} /> </Link>
                </div>

                <div>
                    <h1 class='mt-3' style={{color:"#031b4e"}}>Poser une question</h1>
                    <span style={{color:" rgb(91, 105, 135)"}}>Vous rencontrez des problèmes? Notre communauté de développeurs est là pour vous aider !</span>
                </div>

                <form method='POST' class='col-12 row'>
                    <div class='col-12 form-group mt-3 mb-2'>
                        <label htmlFor="title" class='question_form-label' style={{color:"#031b4e"}}> Titre de la question </label>
                        <input type="text" class='form-control' 
                            id='title' 
                            name='title'
                            // onChange={(e) => setTitle(e.target.value)} 
                        />
                    </div>

                    <div class='col-12 form-group my-2'>
                        <label htmlFor="title" class='form-label'> Contenu de la question </label>
                        <textarea name="content" id="content" cols="30" rows="10"class='form-control' 
                            // onChange={(e) => setContained(e.target.value)}
                        />
                    </div>

                    <div class='col-12 form-group my-2'>
                        <label htmlFor="tile" class='form-label'>Catégories / Technologies</label>
                        <div style={{width:'100%'}}>
                        <MultiSelect style={{width:'100%'}}
                            onChange ={handleChange}
                            options = {options}
                            // onTecChange={(e) => setTechnologies(e.prevent.value)}
                        />
                        </div>
                    </div>

                    <div class='col-12 form-group my-3'>
                        <button type="submit" class='btn btn-primary w-100 btn-lg' style={{fontStyle:"bold"}}> 
                            Poser ma question <FontAwesomeIcon icon={faArrowRightLong}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddQuestion;