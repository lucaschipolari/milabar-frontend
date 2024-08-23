import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useCartStore, useTotalPrice } from "../../stores/useCartStore";
import { sendProduct } from "../../api/shoppingCart";

import "./cartModal.css";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const CartModal = ({ visible, onHide }) => {
  const products = useCartStore((state) => state.products);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = useTotalPrice();

  console.log(products);
  const handleOrder = async () => {
    try {
      const orderDetails = {
        products: products.filter((product) => product.quantity > 0),
        total: totalPrice,
      };
      console.log("Detalles de productos:", orderDetails.products);
      await sendProduct(orderDetails);

      clearCart();
      onHide();
    } catch (error) {
      console.error("error al realizar el pedido", error);
    }
  };

  // const handleOrder = () => {
  //     // Solo para depuración, muestra los productos en la consola
  //     console.log("Productos en el carrito:", products.filter((product) => product.quantity > 0));
  //     console.log("Precio total:", totalPrice);

  //     // Elimina el envío al backend por ahora
  //     // await sendProduct(orderDetails);

  //     clearCart();
  //     onHide();
  //   };

  return (
    <Dialog
      header="Milabar"
      visible={visible}
      className="cart-dialog p-3"
      onHide={onHide}
      draggable={false}
      position="TopRight"
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
    >
      <div className="cart-dialog-header">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="header-text">Tu Carrito</span>
      </div>
      <div className="cart-products">
        {products.map(
          (product) =>
            product.quantity > 0 && (
              <div
                key={product.id}
                className="cart-product dflex align-item-center m-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info flex-grow-1 mx-3">
                  <h5>{product.name}</h5>
                  <p className="price-text">{product.price.toFixed(2)}</p>
                </div>
                <div className="product-quantity d-flex align-items-center mx-4">
                  <Button
                    icon={<FontAwesomeIcon icon={faMinus} />}
                    className="button-input-minus"
                    onClick={() => updateQuantity(product.id, -1)}
                  />
                  <input
                    type="number"
                    value={product.quantity}
                    readOnly
                    className="quantity-input mx-2"
                  />
                  <Button
                    icon={<FontAwesomeIcon icon={faPlus} />}
                    className="button-input-plus"
                    onClick={() => updateQuantity(product.id, 1)}
                  />
                </div>
              </div>
            )
        )}
      </div>
      <div className="cart-total d-flex justify-content-between m-4 price-text">
        <h4>Total:</h4>${totalPrice.toFixed(2)}
      </div>
      <div className="cart-actions m-3 d-flex justify-content-between">
        <button className="btn btn-danger btn-sm p-1" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button className="btn btn-success btn-sm p-1" onClick={handleOrder}>
          Hacer pedido
        </button>
      </div>
    </Dialog>
  );
};
export default CartModal;

CartModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
