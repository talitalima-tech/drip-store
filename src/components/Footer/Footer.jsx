import logoFooter from '../../assets/logo-footer.svg';

const Footer = () => {
  return ( 
    <footer className="text-white p-4"
      style={{ backgroundColor: "#1F1F1F" }}>
      <img src={logoFooter} alt="Logo Digital Store" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nulla facilisi. Praesent vel dolor ut libero posuere gravida.
      </p>
    </footer>
  );
}
 
export default Footer;