import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GiftListPage from "./pages/GiftListPage";
import GiftFormPage from "./pages/GiftFormPage";
import GiftDetailsPage from "./pages/GiftDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./context/AuthContext";

function App() {
  const { currentUser } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<GiftListPage />} />
        <Route path="/form" element={<GiftFormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/details/:id" 
          element={
            <ProtectedRoute>
              <GiftDetailsPage />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
