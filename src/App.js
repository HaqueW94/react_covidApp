import States from './Pages/States';
import Dashboard from './Pages/Dashboard';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/states" component={States}/>
      </Switch>
    </Router>
  );
}

export default App;
