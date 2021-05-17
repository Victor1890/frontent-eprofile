import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/profile/:id' component={Profile} />
      <Route path='/signup' component={Register} />
      <Route path='/signin' component={Login} />
    </Switch>
  </Router>
);

export default App;
