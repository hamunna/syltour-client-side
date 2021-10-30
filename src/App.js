import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from "./pages/common/Header/Header";
import HomePage from "./pages/Home/HomePage/HomePage";

function App() {
  return (
    <Router>
      {/* <Header></Header> */}
      <Switch>


        <Route exact path="/">
          <HomePage></HomePage>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
