import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Home from './components/layouts/Home'
import About from './components/pages/About'
import User from './components/user/User'
import Notfound from './components/layouts/Notfound'
import GithubState from './context/github/GithubState'

function App() {
  return (
    <GithubState >
      <Router >
        <div>
          < Navbar />
          <div className="container-sm" style={{
            width: '70%'
          }}>
            <Switch >
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:username" component={User} />
              < Route component={Notfound} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
