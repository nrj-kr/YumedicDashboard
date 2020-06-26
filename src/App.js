import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, ApprovalRequests, Dashboard,Transactions} from "./Components";
import './App.css';

function App() {
  return (
    <div > 
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact Component ={() => <Dashboard/> } />
          <Route path="/Transactions" exact Component = { () => <Transactions/> } />
          <Route path="/contact" exact component={ () => <Transactions />} />
           <Route path="/ApprovalRequests" exact Component = { () => <ApprovalRequests/> } />      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
