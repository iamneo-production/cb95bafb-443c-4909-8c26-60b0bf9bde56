import Result from "./Result";
import { Data } from "./Data";
import "./Display.css";
const Display = () => {
  const hel=()=>{
    alert("Removed Succesfully!!!")
  }
  return (
    <div className="display">
      <h1>Current Items in The Cart</h1>
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
      <div className="jkjk">
      <a id="jk" href="/order">Place Order</a>
      </div>
    </div>
  );
};
export default Display;