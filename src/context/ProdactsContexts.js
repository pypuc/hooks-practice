import { createContext, useState } from "react";

const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProducts = (product) => {
    products.push(product);
  };

  return (
    <ProductsContext.Provider value={{products, addProducts}}>
      {children}
    </ProductsContext.Provider>
  );
};
