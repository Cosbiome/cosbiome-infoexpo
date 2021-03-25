import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import Layoud from "./components/Layoud";
import FormRegisto from "./pages/FormRegisto";

const App = () => {
  return (
    <Router>
      <Switch>
        <Layoud>
          <Route exact path="/" component={Home} />
          <Route exact path="/registro/:inte" component={FormRegisto} />
        </Layoud>
      </Switch>
    </Router>
  );
};

export default App;
