import { useEffect, useState } from "react";
import sortBy from "lodash.sortby";

import { ProductT } from "../../components/table/table-body/table-row";

const useFetch = (
  searchValue: string,
  sortColumn: string | undefined
): ProductT[] => {
  const [productList, setProductList] = useState<ProductT[]>([]);
  const [originalList, setOriginalList] = useState<ProductT[]>([]);

  const getProductList = async () => {
    const BASE_URL = "http://localhost:8080/product";
    const result = await fetch(BASE_URL);
    const data = await result.json();
    setProductList(data);
    setOriginalList(data);
  };

  useEffect(() => {
    getProductList();
  }, []);

  useEffect(() => {
    setProductList(
      originalList.filter((product) => product.name.includes(searchValue))
    );
  }, [searchValue, originalList]);

  useEffect(() => {
    if (sortColumn) {
      const sortedList = sortBy(productList, sortColumn);
      setProductList(sortedList);
    }
  }, [sortColumn, originalList]);

  return productList;
};

export default useFetch;
