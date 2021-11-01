import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import Header from "./pages/common/Header/Header";
import HomePage from "./pages/Home/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>

          {/* Dynamic Data Load */}
          <Route path="/tourDetails/:tourId">
            
          </Route>

          
          {/* 404 Page */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
