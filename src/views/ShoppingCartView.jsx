import CartActions from "../components/ShoppingCartView/CartActions";
import ProductList from "../components/ShoppingCartView/ProductList";
import UserInfo from "../components/ShoppingCartView/UserInfo";

const ShoppingCartView = () => {
  return (
    <div>
      <UserInfo />
      <ProductList />
      <CartActions />
    </div>
  );
};
export default ShoppingCartView;
