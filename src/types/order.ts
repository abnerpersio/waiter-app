export type CreateOrderPayload = {
  table: string;
  products: {
    quantity: number;
    product: string;
  }[];
};
