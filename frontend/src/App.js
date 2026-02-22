import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import ReportChild from "./pages/public/ReportChild";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Dashboards
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import OrphanageDashboard from "./pages/dashboards/OrphanageDashboard";
import DonorDashboard from "./pages/dashboards/DonorDashboard";
import VolunteerDashboard from "./pages/dashboards/VolunteerDashboard";
import FamilyDashboard from "./pages/dashboards/FamilyDashboard";

// Features
import OrphanageList from "./pages/features/OrphanageList";
import OrphanageProfile from "./pages/features/OrphanageProfile";
import OrphanList from "./pages/features/OrphanList";
import OrphanProfile from "./pages/features/OrphanProfile";
import AdoptionRequests from "./pages/features/AdoptionRequests";
import Donate from "./pages/features/Donate";
import VolunteerTasks from "./pages/features/VolunteerTasks";
import ReportsList from "./pages/features/ReportsList";
import Profile from "./pages/features/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/report" element={<ReportChild />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboards */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/orphanage-dashboard" element={<OrphanageDashboard />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        <Route path="/family-dashboard" element={<FamilyDashboard />} />

        {/* Features */}
        <Route path="/orphanages" element={<OrphanageList />} />
        <Route path="/orphanage/:id" element={<OrphanageProfile />} />
        <Route path="/orphans" element={<OrphanList />} />
        <Route path="/orphan/:id" element={<OrphanProfile />} />
        <Route path="/adoption-requests" element={<AdoptionRequests />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer-tasks" element={<VolunteerTasks />} />
        <Route path="/reports" element={<ReportsList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
