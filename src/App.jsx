import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Section from './components/Section/Section';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Section title="Destaques">
        <p>A</p>
      </Section>

      <Section title="Novidades">
        <p>B</p>
      </Section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

