import { Route, Routes } from 'react-router';
import './App.css';
import AddQuestion from './Components/AddQuestion';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';



function App() {
  return (
    <Routes>
      <Route path='/' element= { <SignIn/> } ></Route>
      <Route path='/Inscription' element={<SignUp/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/AddQuestion' element={<AddQuestion/>} />
    </Routes>
  );
}

export default App;
