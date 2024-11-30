import { useEffect, useState } from 'react';
import { CategoriesService } from '../services/categories';
import { Category } from '../types/category';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function listCategories() {
      try {
        setIsLoading(true);
        const result = await new CategoriesService().list();
        setCategories(result?.data);
      } finally {
        setIsLoading(false);
      }
    }

    listCategories();
  }, []);

  return { categories, isLoading };
}
