import { Button } from "primereact/button";
import { useCartStore } from "../../stores/useCartStore";
import "./cartActions.css"
import { sendProduct } from "../../api/shoppingCart";

const CartActions = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  const handleOrder = () => {
    console.log("Pedido realizado");
  
    sendProduct({
      "productId":"2",
      "cantidad": 2})
  };
  
  return (
    <div className="action-cart">
      <Button
        label="Hacer pedido"
        className="p-button-success"
        onClick={handleOrder}
        
      />
      <Button label="Vaciar carrito" className="p-button-danger" onClick={clearCart} />
    </div>
  );
};
export default CartActions;
