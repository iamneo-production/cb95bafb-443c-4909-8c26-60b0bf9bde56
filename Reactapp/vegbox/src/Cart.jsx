import Result from "./Result";
import { Data } from "./Data";
const Cart = () => {
  return (
    <div className="display">
      {Data.map((val, key) => {
        return (
          <div className="row-result">
            <Result
              title={val.title}
              image={val.image}
              price={val.price}
              quantity={val.quantity}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Cart;