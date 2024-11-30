import { API_ROUTES } from '../config/api';
import { Product } from '../types/product';
import { HttpService } from './http-service';

export class ProductsService {
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
  }

  list(category?: string | null) {
    if (category) {
      const url = API_ROUTES.categories.products.replace(':category', category);
      return this.httpService.get<Product[]>(url);
    }

    return this.httpService.get<Product[]>(API_ROUTES.products.list);
  }
}
