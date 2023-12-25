import TableHeader from "./table-header";
import TableBody, { ProductList } from "./table-body";
import "./table.css";

const Table: React.FC<ProductList> = ({ products }) => {
  return (
    <table className="table__container">
      <TableHeader />
      <TableBody products={products} />
    </table>
  );
};

export default Table;
