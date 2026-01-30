import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
}
 
export default App;