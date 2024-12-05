import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Landing from './components/Landing';
import About from './components/About';

const styleTitle = {
  marginBottom: '16px',
  padding: '16px',
  fontSize: '20px',
  backgroundColor: '#f50057',
  color: '#fff',
}

export function App() {
  return (
    <React.Fragment>
    <main>
      <div style={styleTitle}>React App</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </main>
  </React.Fragment>
  );
}
