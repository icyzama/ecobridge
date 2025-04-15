import { Routes, Route, useLocation } from "react-router";
import './styles/App.css';
import HomePage from "./pages/HomePage/HomePage.jsx";
import DonationPage from "./pages/DonationPage/DonationPage.jsx";
import CommunityHub from "./pages/CommunityHub/CommunityHub.jsx";
import Partners from "./pages/Partners/Partners.jsx";
import TransactionPage from "./pages/TransactionPage/TransactionPage.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from './pages/SignUp/SignUp.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import RanksBadges from "./pages/RanksBadges/RanksBadgesPage.jsx";
import ProfilePageNGO from "./pages/ProfilePage/ProfilePageNGO/ProfilePageNGO.jsx";


import LoginNavbar from "./components/LoginNavbar/LoginNavbar.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return <MainLayout/>;
}

const MainLayout = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="app">
      {!hideNavbarFooter ? <Navbar /> : <LoginNavbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donations" element={<DonationPage />} />
          <Route path="/community" element={<CommunityHub />} />
          <Route path="/ranks-badges" element={<RanksBadges />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profilepagengo" element={<ProfilePageNGO />} />
        </Routes>
      </main>
      {!hideNavbarFooter && <Footer />} 
    </div>
  )
}

export default App
