import { useEffect, useState } from "react";

import Table from "./components/table";
import SearchName from "./components/search-name/indext";
import Pagination from "./components/pagination";
import RowContent from "./components/row-content";

import useFetch from "./hooks/use-fetch";
import { ProductT } from "./components/table/table-body/table-row";
import { useStateValue } from "./context-api/state-provider";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductT>();
  const { state } = useStateValue();
  const products = useFetch(searchValue, state?.sortColumn);

  useEffect(() => {
    if (state?.selectedId) {
      setSelectedProduct(
        products.find((product) => product.id === state?.selectedId)
      );
    }
  }, [state?.selectedId, products]);

  return (
    <>
      <SearchName searchHandler={setSearchValue} />
      <Table products={products} />
      <Pagination />
      <RowContent product={selectedProduct} />
    </>
  );
}

export default App;
