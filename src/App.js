import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import AddNewService from "./pages/AddNewService/AddNewService";
import Footer from "./pages/common/Footer/Footer";
import Header from "./pages/common/Header/Header";
import HomePage from "./pages/Home/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ManageAllOrders from "./pages/PrivatePages/ManageAllOrders/ManageAllOrders";
import MyOrders from "./pages/PrivatePages/MyOrders/MyOrders";
import PlaceOrder from "./pages/PrivatePages/PlaceOrder/PlaceOrder";
import SignIn from "./pages/SignIn/SignIn";
import PrivateRoute from "./Private/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route path="/home">
            <HomePage></HomePage>
          </Route>

          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>

          {/* Dynamic Data Load
          <Route path="/tourdetails/:tourId">

          </Route> */}

          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>

          <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>

          <PrivateRoute path="/addNewService">
            <AddNewService></AddNewService>
          </PrivateRoute>

          <PrivateRoute path="/manageAllOrders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>


          {/* 404 Page */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>

      </Router>
    </AuthProvider>

  );
}

export default App;
