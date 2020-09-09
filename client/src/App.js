import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import FilesUploadComponent from './pages/UploadFile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={FilesUploadComponent} />
      </Switch>
    </Router>
  );
};

export default App;
