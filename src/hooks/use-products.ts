import { useEffect, useState } from 'react';
import { ProductsService } from '../services/products';
import { GetProductFilters, Product } from '../types/product';

type Input = {
  filters?: GetProductFilters;
};

export function useProducts(input?: Input) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function listProducts() {
      try {
        setIsLoading(true);
        const result = await new ProductsService().list(input?.filters?.category);
        setProducts(result?.data);
      } finally {
        setIsLoading(false);
      }
    }

    listProducts();
  }, [input?.filters?.category]);

  return { products, isLoading };
}
