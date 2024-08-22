import { useCartStore } from "../../stores/useCartStore.js";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { InputNumber } from "primereact/inputnumber";
import "./productList.css";

const ProductList = () => {
  const products = useCartStore((state) => state.products);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const totalQuantity = products.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalPrice = products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );

  return (
    <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product-item row">
        <div className="col-4">
          <img src="https://media.lv12.com.ar/p/8a3c78f356bba40f6fb0e20d0346481e/adjuntos/261/imagenes/001/531/0001531207/1200x675/smart/sanguche-milanesa-tucumano-irresistiblepng.png" alt="" className="img-fluid" />
        </div>
        <div className="col-4">
          <div className="product-details">
            <div className="name">{product.name}</div>
            <div className="price">${product.price.toFixed(2)}</div>
          </div>
        </div>
        <div className="col-4">
          <div className="quantity-controls">
            <Button
              icon={<FontAwesomeIcon icon={faMinus} />}
              onClick={() => updateQuantity(product.id, -1)}
              disabled={product.quantity === 0}
            />
           
            <InputNumber
              value={product.quantity}
              buttonLayout="horizontal"
              min={0}
              max={100}
              className="small-input-number mx-2"
              
            />
           
            <Button
              icon={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => updateQuantity(product.id, 1)}
            />
          </div>
        </div>
      </div>
      ))}
      <div className="total-info">
        <p>Total de productos: {totalQuantity}</p>
        <p>Precio total: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default ProductList;
