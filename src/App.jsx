import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage/ProductViewPage";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProductListingPage />} />
            <Route path="/produto/:id" element={<ProductViewPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

