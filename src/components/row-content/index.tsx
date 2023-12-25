import { ProductT } from "../table/table-body/table-row";
import "./row-content.css";
const RowContent: React.FC<{ product: ProductT | undefined }> = ({
  product,
}) => {
  return (
    <div className="row-content__container">
      <h2>The content of: {product?.name}</h2>
      <h3>Price: {product?.price}</h3>
      <h3>Category: {product?.category}</h3>
      <h3>Quantity: {product?.qty}</h3>
      <h3>Rating: {product?.rating}</h3>
    </div>
  );
};

export default RowContent;
