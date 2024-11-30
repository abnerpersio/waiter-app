export const API_BASE_PATH = process.env.EXPO_PUBLIC_API_URL;

export const API_ROUTES = {
  categories: {
    list: '/categories',
    products: '/categories/:category/products',
  },
  products: {
    list: '/products',
  },
  orders: {
    create: '/orders',
  },
};
