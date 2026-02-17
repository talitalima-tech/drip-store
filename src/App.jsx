import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
