import { legacy_createStore as createStore} from 'redux'
import rootReducer from './rootReducer';


let store     = createStore(rootReducer);


export default store;