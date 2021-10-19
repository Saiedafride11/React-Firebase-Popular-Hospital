import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import AllDoctors from './pages/Home/AllDoctors/AllDoctors';
import DoctorDetails from './pages/Home/DoctorDetails/DoctorDetails';
import Booking from './pages/Home/Booking/Booking';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Login from './pages/Login/Login/Login';
import Services from './pages/Home/Services/Services';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import BlogDetails from './pages/Home/BlogDetails/BlogDetails';
import Blog from './pages/Home/Blog/Blog';

function App() {
  return (
    <div className="App">
        <AuthProvider>
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
                    <PrivateRoute path="/booking/:bookingId">
                        <Booking></Booking>
                    </PrivateRoute>
                    <Route path="/blog">
                        <Blog></Blog>
                    </Route>
                    <Route path="/blogs">
                        <BlogDetails></BlogDetails>
                    </Route>
                    <Route path="/services">
                        <Services></Services>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
