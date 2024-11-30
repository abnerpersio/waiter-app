import { API_ROUTES } from '../config/api';
import { CreateOrderPayload } from '../types/order';
import { HttpService } from './http-service';

export class OrdersService {
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
  }

  create(payload: CreateOrderPayload) {
    return this.httpService.post(API_ROUTES.orders.create, payload);
  }
}
