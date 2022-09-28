import "./Result.css";
const Result = ({ title, image, price, quantity }) => {
  const hel=()=>{
    alert("Removed Successfully!!!");
  }
  return (
    <div className="result-res">
      <div className="himg">
        <img src={image}></img>
      </div>
      <div className="rem">
        <span className="ok1">TYPE:{title}</span>
        <span className="ok2">PRICE:{price}</span>
        <span className="ok2">QTY:{quantity}</span>
      </div>
      <div className="new-btn">
        <button className="ok5" onClick={hel}>Remove</button>
      </div>
    </div>
  );
};
export default Result;