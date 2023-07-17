import "./item.css";

export default function Item() {
  return (
    <>
      <div id="component-item">
        <img src="src/assets/armchair-1-min.jpeg" className="item-img" alt="" />
        <p className="item-name">Brown Leather</p>
        <p className="item-price">$259.99</p>
      </div>
    </>
  );
}
