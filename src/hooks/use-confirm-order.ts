import { useCallback, useState } from 'react';
import { OrdersService } from '../services/orders';
import { CreateOrderPayload } from '../types/order';

type Options = {
  onSucess?: () => void;
};

export function useConfirmOrder(options?: Options) {
  const [isLoading, setIsLoading] = useState(false);

  const mutate = useCallback(
    async (payload: CreateOrderPayload) => {
      try {
        setIsLoading(true);
        await new OrdersService().create(payload);
        options?.onSucess?.();
      } finally {
        setIsLoading(false);
      }
    },
    [options],
  );

  return { mutate, isLoading };
}
