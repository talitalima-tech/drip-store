import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 
import 'primeflex/primeflex.css';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    
    </BrowserRouter>
  );
}
 
export default App;