import TableRow, { ProductT } from "./table-row";

export interface ProductList {
  products: ProductT[];
}

const TableBody: React.FC<ProductList> = ({ products }) => {
  return (
    <tbody>
      {products.map((product) => (
        <TableRow key={product.id} {...product} />
      ))}
    </tbody>
  );
};

export default TableBody;
