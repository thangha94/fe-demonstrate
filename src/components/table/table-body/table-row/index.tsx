import { useStateValue } from "../../../../context-api/state-provider";
import "./table-row.css";

export interface ProductT {
  id: string;
  name: string;
  price: number;
  category: string;
  qty: number;
  rating: number;
  color: string;
}

const TableRow: React.FC<ProductT> = ({
  id,
  name,
  price,
  category,
  qty,
  rating,
  color,
}) => {
  const { state, dispatch } = useStateValue();

  const selectRowHandler = (id: string) => {
    dispatch!({
      type: "SET_SELECTED_PRODUCT_ID",
      payload: {
        selectedId: id,
      },
    });
  };

  return (
    <tr className="table-row__container" onClick={() => selectRowHandler(id)}>
      <td id={id}>
        <input checked={state?.selectedId === id} type="checkbox" />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td>{qty}</td>
      <td>{rating}</td>
      <td>{color}</td>
    </tr>
  );
};

export default TableRow;
