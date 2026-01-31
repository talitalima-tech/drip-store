import cartIcon from "../../assets/mini-cart.svg";

const CartIcon = () => {
  return (
    <div style={{ width: "33px", height: "29px" }}>
      <img
        src={cartIcon}
        alt="Carrinho"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default CartIcon;
