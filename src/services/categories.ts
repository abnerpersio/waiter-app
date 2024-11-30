import { API_ROUTES } from '../config/api';
import { Category } from '../types/category';
import { HttpService } from './http-service';

export class CategoriesService {
  private readonly httpService: HttpService;

  constructor() {
    this.httpService = new HttpService();
  }

  list() {
    return this.httpService.get<Category[]>(API_ROUTES.categories.list);
  }
}
