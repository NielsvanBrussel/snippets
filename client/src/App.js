import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Editor from './components/Editor/Editor'
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/editor">Editor</Link>
              </li>
            </ul>
          </nav>
          
          <Switch>
            <Route path="/editor">
              <Editor />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>          
    </GlobalProvider>
  );
}

export default App;
