import "./products.css";
import Item from "../item/item";

export default function Products() {
  return (
    <>
      <div id="component-products">
        <h1 className="font-label">Shop From Our Latest Imports:</h1>
        <div className="product-window">
          <Item />
        </div>
      </div>
    </>
  );
}