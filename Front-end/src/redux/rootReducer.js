
const initialState = {
    addQuestion : [
        {
            title : 'Les Composants',
            contained : 'Quelle est la différence entre un composant fonctionnel et un composant de classe ?',
            technologies : 'react js, Mongo db',
        },
    ]
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'add-question': {
            return {addQuestion : [...state.addQuestion, action.payload]  } ;
        }

        default :
            return state;
    }

}

export default rootReducer;