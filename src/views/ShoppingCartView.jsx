import CartActions from "../components/ShoppingCartView/CartActions";
import ProductList from "../components/ShoppingCartView/ProductList";
// import UserInfo from "../components/ShoppingCartView/UserInfo";

import "../style/shoppingCartView.css"

const ShoppingCartView = () => {
  return (
    <div className="shopping-cart-view bg-dark-subtle rounded">
      {/* <UserInfo /> */}
      <ProductList />
      <CartActions />
    </div>
  );
};
export default ShoppingCartView;
