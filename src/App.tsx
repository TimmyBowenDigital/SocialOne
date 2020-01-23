import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import NavPanel from "./components/nav-panel";
//import HeaderPanel from "./components/header-panel";
//import FooterPanel from "./components/footer-panel";
//import NewsFeedPanel from "./components/news-feed";
//import ProfileDetailPanel from "./components/profile-detail-section";
//import ProfilePage from "./pages/user-profile";
import HomePage from "./pages/home";

const App: React.FC = () => {
  return (
    <div className="App">
        <HomePage />
    </div>
  );
}

export default App;
