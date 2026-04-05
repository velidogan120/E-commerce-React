import ShoppingCart from "./ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartItemCount,
  incrementCartItemCount,
  removeCartItem,
  setAllCartItemsChecked,
  toggleCartItemChecked,
} from "../lib/store/slices/shoppingCartSlice";
import "../styles/shopping-carts.css";
import ShoppingCartTotalSummary from "./ShoppingCartTotalSummary";

const ShoppingCarts = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);

  const selectedItemCount = cart.filter((item) => item.checked).length;
  const isAllSelected = cart.length > 0 && selectedItemCount === cart.length;

  return (
    <section className="shopping-carts-section">
      <div className="shopping-carts-header">
        <h2>Sepetim</h2>
        <p>
          {cart.length} ürün, {selectedItemCount} seçili
        </p>
      </div>

      {cart.length ? (
        <div className="shopping-carts-container">
          <div className="shopping-carts-main">
            <label className="shopping-carts-select-all">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={(event) => {
                  dispatch(setAllCartItemsChecked(event.target.checked));
                }}
              />
              <span>Tum urunleri sec</span>
            </label>

            <div className="shopping-carts-list">
              {cart.map((item) => (
                <ShoppingCart
                  key={item.product.id}
                  cartItem={item}
                  onToggleChecked={() =>
                    dispatch(toggleCartItemChecked(item.product.id))
                  }
                  onIncrement={() =>
                    dispatch(incrementCartItemCount(item.product.id))
                  }
                  onDecrement={() =>
                    dispatch(decrementCartItemCount(item.product.id))
                  }
                  onRemove={() => dispatch(removeCartItem(item.product.id))}
                />
              ))}
            </div>
          </div>

          <ShoppingCartTotalSummary />
        </div>
      ) : (
        <div className="shopping-carts-empty">Sepetiniz su anda bos.</div>
      )}
    </section>
  );
};

export default ShoppingCarts;
