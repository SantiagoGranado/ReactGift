import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GiftListPage from "./pages/GiftListPage";
import GiftFormPage from "./pages/GiftFormPage";
import GiftDetailsPage from "./pages/GiftDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<GiftListPage />} />
        <Route path="/form" element={<GiftFormPage />} />
        <Route 
          path="/details/:id" 
          element={
          
              <GiftDetailsPage />
            
          } 
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
