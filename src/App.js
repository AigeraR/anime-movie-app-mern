import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import SingleMovies from "./Screens/SingleMovies";
import WatchPage from "./Screens/Dashboard/WatchPage";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Aos from "aos";
import "aos/dist/aos.css";
import MoviesPage from "./Screens/Movies";
import Profile from "./Screens/Dashboard/Profile";
import Password from "./Screens/Dashboard/Password";
import FavoritesMovies from "./Screens/Dashboard/FavoritesMovies.js";
import MovieList from "./Screens/Dashboard/Admin/MovieList.js";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard.js";
import Categories from "./Screens/Dashboard/Admin/Categories.js";
import Users from "./Screens/Dashboard/Admin/Users.js";
function App() {
  Aos.init();
  return (
    <Router> {/* Wrap your Routes inside the Router component */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<SingleMovies />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/watch/:id" element={<WatchPage/>} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/password" element={<Password />} />
        <Route path="/favorites" element={<FavoritesMovies />} />   
        <Route path="/movieslist" element={<MovieList />} /> 
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </Router>
  );
}

export default App;
 