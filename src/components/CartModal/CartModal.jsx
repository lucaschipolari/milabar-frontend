import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useCartStore, useTotalPrice } from "../../stores/useCartStore";
import { sendProduct } from "../../api/shoppingCart";
import Input from "../ui/input/Input";

import "./cartModal.css";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CartModal = ({ visible, onHide }) => {
  const products = useCartStore((state) => state.products);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = useTotalPrice();

  const {
    register,
    formState: { errors },
    watch,
  } = useForm();

  const tableNumber = watch("tableNumber", "");

  const handleOrder = async () => {
    try {
      const orderDetails = {
        products: products.filter((product) => product.quantity > 0),
        total: totalPrice,
        tableNumber: tableNumber,
      };

      const result = await Swal.fire({
        title: "Estas a punto de realizar un pedido",
        text: "¿Estás seguro de enviar el pedido?",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, enviar!",
        confirmButtonColor: "#3085d6",
      });

      if (result.isConfirmed) {
        await sendProduct(orderDetails);

        Swal.fire({
          title: "Pedido realizado",
          text: "Tu pedido fue enviado con éxito!",
          footer: "Gracias por elegirnos",
          icon: "success",
        });

        clearCart();
        onHide();
      }
    } catch {
      Swal.fire({
        title: "Error",
        text: "Hubo un error al realizar el pedido",
        icon: "error",
      });
    }
  };

  const isOrderButtonDisabled =
    !tableNumber ||
    parseInt(tableNumber) === 0 ||
    parseInt(tableNumber) > 20 ||
    !!errors.tableNumber;

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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_VVHpq1t0kCF1wc6SreFBvWGKEYXAayevA&s"
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
      <div className="cart-total d-flex justify-content-between m-3 price-text">
        <h4>Total:</h4>${totalPrice.toFixed(2)}
      </div>
      <div className="d-flex align-items-center m-3 table-number-container">
        <p className="m-0">Ingrese su numero de mesa para hacer el pedido:</p>
        <Input
          className="m-3 input-table-number"
          error={errors.tableNumber}
          name="tableNumber"
          options={{
            required: {
              value: true,
              message: "El número de mesa es requerido para realizar el pedido",
            },
            validate: {
              notZero: (value) =>
                parseInt(value) > 0 || "El número de mesa no puede ser 0",
              notGreaterThan20: (value) =>
                parseInt(value) <= 20 ||
                "El número de mesa no puede ser mayor a 20",
            },
          }}
          register={register}
          type="number"
          isNumber={true}
        />
        {errors.tableNumber && (
          <p className="error-text">{errors.tableNumber.message}</p>
        )}
      </div>
      <div className="cart-actions m-3 d-flex justify-content-between">
        <button className="btn btn-danger btn-sm p-1" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button
          className="btn btn-success btn-sm p-1"
          onClick={handleOrder}
          disabled={isOrderButtonDisabled}
        >
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
