import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import AllDoctors from './pages/Home/AllDoctors/AllDoctors';
import Booking from './pages/Booking/Booking';
import DoctorDetails from './pages/Home/DoctorDetails/DoctorDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/home">
                  <Home></Home>
              </Route>
              <Route path="/doctors">
                  <AllDoctors></AllDoctors>
              </Route>
              <Route path="/doctor/:doctorId">
                  <DoctorDetails></DoctorDetails>
              </Route>
              <Route path="/booking">
                  <Booking></Booking>
              </Route>
              <Route path="*">
                  <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
