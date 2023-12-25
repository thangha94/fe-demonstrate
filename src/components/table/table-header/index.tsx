import { useStateValue } from "../../../context-api/state-provider";
import "./table-header.css";
const TableHeader = () => {
  const { state, dispatch } = useStateValue();
  const sortColumn = state?.sortColumn;

  const sortHandler = (column: string) => {
    dispatch!({
      type: "SET_SORT_COLUMN",
      payload: {
        sortColumn: column,
      },
    });
  };

  return (
    <thead className="thead__container">
      <tr>
        <th></th>
        <th
          className={sortColumn === "name" ? "sorting" : ""}
          onClick={() => sortHandler("name")}
          title="Click to sort by name"
        >
          name
        </th>
        <th
          className={sortColumn === "price" ? "sorting" : ""}
          onClick={() => sortHandler("price")}
          title="Click to sort by price"
        >
          price
        </th>
        <th
          className={sortColumn === "category" ? "sorting" : ""}
          onClick={() => sortHandler("category")}
          title="Click to sort by category"
        >
          category
        </th>
        <th
          className={sortColumn === "qty" ? "sorting" : ""}
          onClick={() => sortHandler("qty")}
          title="Click to sort by qty"
        >
          qty
        </th>
        <th
          className={sortColumn === "rating" ? "sorting" : ""}
          onClick={() => sortHandler("rating")}
          title="Click to sort by rating"
        >
          rating
        </th>
        <th>color</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
