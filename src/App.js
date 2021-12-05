import './css/App.css';
import './css/props.css';
import{BrowserRouter, Route} from 'react-router-dom'
import{useState} from 'react'
import Login from './screen/Login'
import SignUp from './screen/SignUp'
import ResourcePage from './screen/ResourcePage'
import ProjectPage from './screen/ProjectPage'
import ProjectResourcePage from './screen/ProjectResourcePage'
import ProjectCost from './screen/ProjectCost';
import UpdatePage from  './components/UpdatePage'


function App() {
const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <div className="App">

      <BrowserRouter>
        <Route exact path='/' component={ Login } exact />
        <Route exact path='/register' component={ SignUp } exact />
        <Route exact path='/resouces' component={ ResourcePage } exact />
        <Route exact path='/projects' component={ ProjectPage } exact />
        <Route exact path='/proejctsRes' component={ ProjectResourcePage } exact />
        <Route exact path='/proejctCost' component={ ProjectCost } exact />
        <Route exact path='/update' component={ UpdatePage } exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
